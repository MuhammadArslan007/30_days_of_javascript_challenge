function logModuleName(){
    console.log('exportEntireModule.js');
}

const unitPrice = 35;
const userName = "Arslan"
const unitBuy = 5
let totalPrice = unitBuy*unitPrice;
const coupon = 'Sale'

function dicountByCoupon(coupon) {
    if(coupon=== 'Sale'){
        const discount = totalPrice * .05
        totalPrice -= discount
    }
}

export {logModuleName, totalPrice, dicountByCoupon, userName}