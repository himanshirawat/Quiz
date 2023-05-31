const { v4: uuid } = require("uuid");

const quizes = {
  data: [
    {
      id: uuid(),
      category: "marvel",
      title: "Marvel",
      description: "lorem isp",
      quiz: [
        {
          id: uuid(),
          question: "What is your name",
          options: [
            { id: uuid(), option: "Himanshi", isCorrect: true, },
            { id: uuid(), option: "siya", isCorrect: false, },
            { id: uuid(), option: "manshi", isCorrect: false,},
            { id: uuid(), option: "manish", isCorrect: false, },
          ],
        },
        {
            id: uuid(),
            question: "What is your age",
            options: [
              { id: uuid(), option: "12", isCorrect: false },
              { id: uuid(), option: "22", isCorrect: true },
              { id: uuid(), option: "98", isCorrect: false,},
              { id: uuid(), option: "60", isCorrect: false, },
            ],
          },
      ],
    },
    {},
    {},
  ],
};


module.exports = quizes;