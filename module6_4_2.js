function simpleNumber(myNumber){
    if ((typeof myNumber!="number") || (isNaN(myNumber))){
        return "это не число";
    }
    else {if (myNumber<=1000){
        if(myNumber===0 || myNumber===1) {return "это "+myNumber;}
         for(i=2;myNumber;i++) {
             if (myNumber%i===0 && myNumber!=i){
                 return "Это составное число";
             }
         }
        return "это простое число";
    }
        else { return "число более 1000";}

    }
} 

let test=simpleNumber(11);
console.log(test);