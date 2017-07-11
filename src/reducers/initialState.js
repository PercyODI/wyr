import shortId from "shortid";

export default {
  questions: [
    {
      id: shortId.generate(),
      choiceOne: "make a movie of your life before you were twenty-one",
      choiceTwo: "a movie of your life after the age of twenty-one"
    },
    {
      id: shortId.generate(),
      choiceOne: "have hands instead of feet",
      choiceTwo: "feet instead of hands?"
    },
    {
      id: shortId.generate(),
      choiceOne: "to never eat your favorite food the rest of your life",
      choiceTwo: "only be allowed to eat your favorite food for the rest of your life"
    }
  ]
};
