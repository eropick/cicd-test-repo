const factorial = require("../src/index");

describe("Factorial function",()=>{
    it('양의 정수 계산 테스트', () => {
        expect(factorial(3)).toEqual(6);
    }); //fact(3) = 6
    
    it("예외 처리",()=>{
        expect(()=>{
            factorial(-1);
        }).toThrow("양수만 계산 가능");
    });
});

