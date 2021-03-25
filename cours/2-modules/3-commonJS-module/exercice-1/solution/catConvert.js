exports.catAge = (age) => {
  console.log(
    `Votre age en chat est ${Math.round(age / 9)} ans 😺`
  );
};

exports.humanAge = (age) => {
  console.log(
    `L'age de votre chat en âge humain est ${Math.round(age * 9)} ans 👨`
  );
};