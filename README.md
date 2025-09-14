# My Node.js App

## Overview
This project is a Node.js application built with Express that manages sports-related data and user subscriptions. It provides a RESTful API for clients to interact with sports information.

## Project Structure
```
my-nodejs-app
├── src
│   ├── index.js
│   ├── controllers
│   │   └── sportsController.js
│   ├── routes
│   │   └── sportsRoutes.js
│   ├── models
│   │   └── sportsModel.js
│   └── middleware
│       └── auth.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-nodejs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- `GET /api/profile`: Retrieve user profile information.
- `GET /api/sportsList`: Get a list of available sports.
- `POST /api/login`: Log in a user and receive a token.
- `POST /api/postSports`: Subscribe to a sport.
- `GET /api/subscribedList`: Retrieve the list of subscribed sports.
- `DELETE /api/removeList`: Unsubscribe from a sport.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.