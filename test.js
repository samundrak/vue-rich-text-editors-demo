var BN = require("bignumber.js")
BN.config({
    ROUNDING_MODE: 8,
})

x= new BN(999.9999999)

console.log(x.toFixed(2))