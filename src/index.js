function factorial(n) {
    if(n<0) throw new Error("양수만 계산 가능");
    if(n===0) return 1;
    else return n*factorial(n-1);
}
module.exports = factorial;