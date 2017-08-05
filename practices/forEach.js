// The Array forEach method

// For loop
function getStockSymbolsA(stocks) {
  let symbols = [];
  let counter;
  let stock;

  for (counter = 0; counter < stocks.length; counter++) {
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }

  return symbols;
}

// forEach method
function getStockSymbols(stocks) {
  let symbols = [];
  stocks.forEach(stock => symbols.push(stock.symbol));
  return symbols;
}

let symbols = getStockSymbols([
  { symbol: 'XFX', price: 240.22, volume: 23432 },
  { symbol: 'TNZ', price: 332.19, volume: 234 },
  { symbol: 'JXJ', price: 120.22, volume: 5323 },
]);

symbols; // => [ 'XFX', 'TNZ', 'JXJ' ]
