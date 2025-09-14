class SportsController {
  constructor() {
    this.sportsList = [
      "pickle",
      "Cricket",
      "Padel",
      "Hockey",
      "Football",
      "Basketball",
      "Volleyball",
      "Baseball",
      "Rugby",
      "American Football",
      "Tennis",
      "Table Tennis",
      "Badminton",
      "Squash",
      "Golf",
      "Boxing",
      "MMA",
      "Wrestling",
      "Judo",
      "Karate",
      "Taekwondo",
      "Fencing",
      "Archery",
      "Shooting",
      "Weightlifting",
      "Powerlifting",
      "Strongman",
      "CrossFit",
      "Cheerleading",
      "DanceSport",
      "Parkour",
      "Dodgeball",
      "Ultimate Frisbee",
      "Disc Golf",
      "Softball",
      "Netball",
      "Gaelic Football",
      "Hurling",
      "Sepak Takraw",
      "Bandy",
      "Water Polo",
      "Diving",
      "Martial Arts",
      "Capoeira",
      "Kickboxing",
      "Muay Thai",
      "Brazilian Jiu-Jitsu",
      "Sambo",
      "Kung Fu",
      "Sumo Wrestling",
    ];
    this.subscribedList = [];
    this.users = []; // Mock user storage
  }

  getSportsList = (req, res) => {
    res.status(201).json(this.sportsList);
  };

  subscribeToSport = (req, res) => {
    const { sport } = req.body;

    if (!sport || typeof sport !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid input: 'sport' must be a non-empty string." });
    }

    if (!this.sportsList.includes(sport)) {
      return res
        .status(404)
        .json({ error: "Sport not found in the sports list." });
    }

    if (this.subscribedList.includes(sport)) {
      return res.status(409).json({ error: "Sport already subscribed." });
    }

    this.subscribedList.push(sport);
    res
      .status(201)
      .json({
        message: "Sport added successfully.",
        subscribedList: this.subscribedList,
        subscribedSport: sport,
      });
  };

  //this is to fetch the subscribed list
  getSubscribedList = (req, res) => {
    res.json({ subscribedList: this.subscribedList });
  };

  removeSubscribedSport = (req, res) => {
    const { sport } = req.body;

    if (!sport || typeof sport !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid input: 'sport' must be a non-empty string." });
    }

    const index = this.subscribedList.indexOf(sport);
    if (index > -1) {
      this.subscribedList.splice(index, 1);
      return res
        .status(200)
        .json({
          message: "Sport deleted successfully.",
          subscribedList: this.subscribedList,
        });
    } else {
      return res
        .status(404)
        .json({ error: "Sport not found in subscribed list." });
    }
  };
  signupList = (req, res) => {
    const { email, password } = req.body;
    const { isSignup } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    // regex checks
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

    if (!emailRegex.test(email)) {
        //validating email format
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: "Invalid password format." });
    }

    // check if user exists
    const existingUser = this.users.find((u) => u.email === email);

    if (isSignup && existingUser) {
      return res
        .status(409)
        .json({ error: "User with same Email already exists." });
    } else if (!isSignup  && existingUser) {
      return res.status(201).json({
        email: { email },
        isLogin:true,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzLCJleHAiOjE3MDgzNTUxMjN9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      });
    }else if(!isSignup && !existingUser){
        return res
        .status(409)
        .json({ error: "User with Email does not exists. Please sign Up" });
    }
    else if(isSignup) {
      this.users.push({ email, password });
      return res.status(201).json({ message: "User registered successfully." });
    }
  };
}

module.exports = new SportsController();
