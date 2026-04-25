const EventService = require("../services/event-service");

class EventController {
  static async getEvents(req, res, next) {
    try {
      const { month, day, language, type } = req.query;
      const events = await EventService.getEvents({
        month,
        day,
        language,
        type,
      });
      return res.success({ events }, "Events fetched successfully");
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = EventController;
