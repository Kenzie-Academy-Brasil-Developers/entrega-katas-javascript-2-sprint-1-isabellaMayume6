function add (x, y){
    let res = x+y
        return res
}console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

function multiply (a, b){
    let res =0
    for(let count=0; count<b;count++){
        res= add(a, res)
    }
    return res 
}console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power (x, n){
    let res =1
    for (count=0;count<n;count++){
        res= multiply(x, res)
    }
    return res 
}console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(n){
    let res = 1
    for (let count=n;count>0;count--){
        res = multiply(count, res)
    }
    return res
}console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(n){
    if(n < 2) {
    return n
    }else{
    return fibonacci(n - 1) 
    + fibonacci(n - 2)}
    }console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
