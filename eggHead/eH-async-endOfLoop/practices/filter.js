// The Array filter method
// Array.prototype.filter();

// Using forEach
// function getStocksOver(stocks, minPrice){
//   let results = [];
//
//   stocks.forEach(stock => {if(stock.price > minPrice) {results.push(stock)}});
//
//   return results;
// }
//

// Using Filter
function getStocksOver(stocks, minPrice) {
  return stocks.filter(stock => stock.price >= minPrice);
}

var expensiveStocks = getStocksOver(
  [
    { symbol: 'XFX', price: 240.22, volume: 23432 },
    { symbol: 'TNZ', price: 332.19, volume: 234 },
    { symbol: 'JXJ', price: 120.22, volume: 5323 }
  ],
  150.00
);

console.log(expensiveStocks);
