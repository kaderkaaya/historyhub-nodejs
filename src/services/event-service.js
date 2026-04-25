require("dotenv").config();
const BASE_URL = process.env.WIKIMEDIA_BASE_URL;
const USER_AGENT = "historyhub-nodejs/1.0 (contact: dev@example.com)";
const { ApiError } = require('resify-express');
class EventService {
  static async getEvents({ month, day, language, type }) {
    const url = `${BASE_URL}/feed/v1/wikipedia/${language}/onthisday/${type}/${month}/${day}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new ApiError("Wikimedia request failed", response.status, {
        code: "WIKIMEDIA_REQUEST_FAILED",
        description: `Wikimedia request failed: ${response.status} ${response.statusText}`,
      });
    }

    const data = await response.json();
    return data.events;
  }
}

module.exports = EventService;
