const SportsController = require("./controllers/sportsController");

const setRoutes = (app) => {
  app.get("/api/subscribedList", SportsController.getSubscribedList);
  app.get("/api/sportsList", SportsController.getSportsList);
  app.post("/api/postSports", SportsController.subscribeToSport);
  app.delete("/api/removeList", SportsController.removeSubscribedSport);
  app.post(
    "/api/signup",
    (req, res, next) => {
      req.isSignup = true;
      next();
    },
    SportsController.signupList
  );

  app.post(
    "/api/login",
    (req, res, next) => {
      req.isSignup = false;

      next();
    },
    SportsController.signupList
  );
};

module.exports = setRoutes;
