// Chaining the Array map and filter methods

const stocks = [
  { symbol: 'XFX', price: 240.22, volume: 23432 },
  { symbol: 'TNZ', price: 332.19, volume: 234 },
  { symbol: 'JXJ', price: 120.22, volume: 5323 },
];

const filteredStocksSymbols = stocks
  .filter(stock => stock.price >= 150.0)
  .map(stock => stock.symbol);

filteredStocksSymbols.forEach(symbol => console.log(symbol)); /* => 
XFX
TNZ
*/
