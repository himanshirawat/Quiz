const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
      {
        id: uuid(),
        username: "marvel",
        password: "Marvel",
        emailId: "marvel@example.com",
      },
      {
        id: uuid(),
        username: "anime",
        password: "Naruto",
        emailId: "naruto@example.com",

      }
    ]
}

module.exports = userdata;