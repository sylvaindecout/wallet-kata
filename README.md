# Wallet kata

## Instructions

Given a Wallet containing Stocks, build a function that compute the value of wallet in a currency.

The Stocks have a quantity and a StockType. The StockType can be for example petroleum, Euros, bitcoins and Dollars.

To value the portfolio in a Currency you can use external api to provide rate exchanges

* Api : 	https://api.exchangeratesapi.io

An interface can be used to abtract the call to the API: [FinanceApi.ts](src/finance-api.ts)
