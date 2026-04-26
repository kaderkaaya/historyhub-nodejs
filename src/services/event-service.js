require("dotenv").config();
const Redis = require("ioredis");
const redisConnection = require("../config/redis");
const redisClient = new Redis(redisConnection);
const CACHE_KEY_PREFIX = "historyhub:onthisday:";
const BASE_URL = process.env.WIKIMEDIA_BASE_URL;
const USER_AGENT = "historyhub-nodejs/1.0 (contact: dev@example.com)";
const { ApiError } = require("resify-express");
class EventService {
  static async getEvents({ month, day, language, type }) {
    const url = `${BASE_URL}/feed/v1/wikipedia/${language}/onthisday/${type}/${month}/${day}`;
    const cacheKey = `${CACHE_KEY_PREFIX}${language}:${type}:${month}:${day}`;
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      return parsed;
    }
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
    const events =
      data.events ||
      data.deaths ||
      data.holidays ||
      data.selected ||
      data.births;
    const result = events.map((event) => ({
      year: event.year,
      text: event.text,
      pages: event.pages.map((page) => ({
        title: page.titles.normalized || page.title,
        extract: page.extract,
        image: page.thumbnail?.source || page.originalimage?.source,
        url: page.content_urls.desktop.page,
      })),
    }));
    await redisClient.set(cacheKey, JSON.stringify(result), "EX", 3600);
    //Elimdeki result verisini metne çevirip
    //  cacheKey ismiyle Redis'e kaydet ve 1 saat (3600 saniye) sonra
    //  bu veriyi otomatik olarak sil
    return result;
  }
}

module.exports = EventService;
