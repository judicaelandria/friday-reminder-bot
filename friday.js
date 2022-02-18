const randomWord = () => {
  const words = ["Yay", "Folks", "People", "Oh no", "Mamamia"];
  return words[Math.floor(Math.random() * words.length)];
};

const fridayReminderTweet = () => {
  const numberDay = new Date().getDay();
  const magicWord = `${randomWord()}, it's Friday`;
  if (numberDay === 5) return magicWord;
};

module.exports = fridayReminderTweet;
