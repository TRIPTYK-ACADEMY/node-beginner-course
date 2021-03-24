const util = require("util");

const data = [
  { country: "Belgique", rate: 21 },
  { country: "France", rate: 20 },
  { country: "Allemagne", rate: 17 },
];

for (const { country, rate } of data) {
  console.log(util.format("En %s, le taux de TVA est de %f%", country, rate));
}
