#!/usr/bin/env node

function fib(num) {
    if (num <= 0) {
        return "Number must be greater than 0"
    }
    else if (num === 1) {
        return 0
    }
    else if (num === 2) {
        return 1
    }
    let l = 0
    let r = 1
    num = num - 2
    while (num > 0) {  
        let holder = l
        l = r
        r = holder + r
        
        num--
    }
    return r
}

function fibsRec(num) {
    if (num <= 1) {
        return 0
    }
    else if (num === 2) {
        return 1
    }
    else {
        return fibsRec(num - 2) + fibsRec(num - 1)
    }
} 

export {fib, fibsRec}