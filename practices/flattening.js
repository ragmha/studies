// Advanced Flattening

let exchanges = [
  {
    name: 'NYSE',
    stocks: [
      {
        symbol: 'XFX',
        closes: [
          { date: new Date(2014, 11, 24), price: 240.1 },
          { date: new Date(2014, 11, 23), price: 232.08 },
          { date: new Date(2014, 11, 22), price: 241.09 },
        ],
      },
      {
        symbol: 'TNZ',
        closes: [
          { date: new Date(2014, 11, 24), price: 521.24 },
          { date: new Date(2014, 11, 23), price: 511.0 },
          { date: new Date(2014, 11, 22), price: 519.29 },
        ],
      },
    ],
  },
  {
    name: 'TSX',
    stocks: [
      {
        symbol: 'JXJ',
        closes: [
          { date: new Date(2014, 11, 24), price: 423.22 },
          { date: new Date(2014, 11, 23), price: 424.84 },
          { date: new Date(2014, 11, 22), price: 419.72 },
        ],
      },
      {
        symbol: 'NYN',
        closes: [
          { date: new Date(2014, 11, 24), price: 16.82 },
          { date: new Date(2014, 11, 23), price: 16.12 },
          { date: new Date(2014, 11, 22), price: 15.77 },
        ],
      },
    ],
  },
];

Array.prototype.concatAll = function() {
  let results = [];

  this.forEach(subArray => subArray.forEach(item => results.push(item)));

  return results;
};

let christmasEveCloses = exchanges
  .map(exchange =>
    exchange.stocks
      .map(stock =>
        stock.closes
          .filter(
            close => close.date.getMonth() === 11 && close.date.getDate() === 24
          )
          .map(close => ({ symbol: stock.symbol, price: close.price }))
      )
      .concatAll()
  )
  .concatAll();

christmasEveCloses.forEach(christmasEveClose =>
  console.log(christmasEveClose)
); /* =>
{ symbol: 'XFX', price: 240.1 }
{ symbol: 'TNZ', price: 521.24 }
{ symbol: 'JXJ', price: 423.22 }
{ symbol: 'NYN', price: 16.82 }
*/
