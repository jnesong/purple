/* 
I: array of prices, index represents day
O: max profit/difference between two prices
C: must buy before sell, so the smaller price must have an earlier/smaller index
there will be at least one price and one day, prices are greater than or equal to 0
E: if max profit is 0, return 0
Time Complexity: 
Space Complexity: 
*/

function maxProfit(prices) {
    let buy = prices[0]
    let sell = prices[1]

    if (sell) {
        for (i = 1; i < prices.length; i++) {
            if (prices[i] < buy) {
                buy = prices[i]
            }
            if (prices[i] > sell) {
                sell = prices[i]
            }
        }
        return sell - buy
    }
    return 0

}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))