function motto() {
    console.log("Shop 9KICKS!");
}
motto();

console.log();

console.log("I'm here");
const folahanFunction = function addDigits(x, y) {
    return x + y
}(5, 10);
console.log(folahanFunction);

console.log();

// function outer() {
//     var even = 3;
//     if(even % 2 === 0) {
//         return;
//     }
//     console.log(even)
// }

// outer()

function outer() {
    const even = 2;

    function inner(number) {
        console.log("Inner function: ", number)
    }
    inner(even);
    console.log("Outer function is here")
}
outer();

console.log();

let even;

function sample1() {
    even = 2;
    return even
}

even = sample1();

function sample2(number) {
    console.log(number * 5);
}
sample2(even);

console.log();

let price = 55.43;
const folahan = function getPrice(coupon) {
    function getDiscountedPrice(percentage) {
        price *= percentage;
    }

    if (coupon !== null) {
        getDiscountedPrice(coupon.discount);
    }
    return price;
};
const joshua = {
    discount: 0.5
};
console.log(folahan(joshua));