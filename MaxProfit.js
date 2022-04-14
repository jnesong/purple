/* 
I: array of prices, index represents day
O: max profit/difference between two prices
C: must buy before sell, so the smaller price must have an earlier/smaller index
there will be at least one price and one day, prices are greater than or equal to 0
E: if max profit is 0, return 0
Time Complexity: O(n)
Space Complexity: O(1)
*/

function maxProfit(prices) {
    let buy = prices[0]
    let profit = 0

    for (let i=1; i<prices.length; i++){
        if (prices[i] < buy){
            buy = prices[i]
        }
        profit = Math.max(prices[i]-buy, profit)
        console.log("day =", i, "buying price =", buy)
    }
    return profit

}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3]))
console.log(maxProfit([4, 9, 2]))