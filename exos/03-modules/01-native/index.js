const Util = require('util');
const data = [
  { country : 'Belgique', rate : 21 },
  { country : 'France', rate : 20 },
  { country : 'Allemagne', rate : 17 },
];
data.forEach( (item) => {
  console.log(Util.format('En %s, le taux de TVA est de %f%', item.country, item.rate));
});