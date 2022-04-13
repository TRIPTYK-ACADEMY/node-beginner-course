const emojiList = ["👅", "👂", "🤞", "💣", "💨", "😤", "👩‍🏫"]

// export ... à la place de exports.
export function generate(size = 3) {
  let emojiString = "";
  for(var i = 0; i < size; i++){
    emojiString += emojiList[Math.floor(Math.random() * emojiList.length)]
  }
  console.log(emojiString);
};
