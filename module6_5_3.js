function level1(arg1){
    return function (arg2=0){return arg1+arg2}
}

let test=level1(5);
console.log(test);