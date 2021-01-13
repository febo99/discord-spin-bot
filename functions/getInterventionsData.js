const fetch = require('node-fetch');
module.exports = {
  name: 'intervencije',
  description: 'Lista intervencij',
  async execute(message, args) {
    const finalItems = [];

    const apiLocation = 'http://spin3.sos112.si/javno/assets/data/lokacija.json';
    const apiLarge = 'https://spin3.sos112.si/javno/assets/data/vecjiObseg.json';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const responseLargeActions = await fetch(proxy + apiLarge,
        {method: 'GET',
          headers: {'Content-Type': 'application/json', 'origin': 'R'}});
    const jsonLarge = await responseLargeActions.json();
    finalItems.push(jsonLarge.value);
    const responseActions = await fetch(proxy + apiLocation,
        {method: 'GET',
          headers: {'Content-Type': 'application/json', 'origin': 'R'}});
    const jsonActions = await responseActions.json();
    finalItems.push(jsonActions.value);
    console.log(finalItems);
  },
};
