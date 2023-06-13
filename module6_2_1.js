function evenOdd(myNumber=0){
    if (myNumber==0){ return 0;} 
    else{
        if( myNumber % 2 === 0) {return 1;} else {return -1;}
    }    
}

arr= [1, 2, 3,0];
let evenNumber=0;
let oddNumber=0;
let zeroNumber=0;
for (i=0; i<arr.length; i++){
    rezult=(typeof arr[i] == "number" && !isNaN(arr[i])? evenOdd(arr[i]) : "notNumber");
    if (rezult!="notNumder"){
        if (rezult==0){ zeroNumber++;} 
        else{
            if( rezult==1) {evenNumber++;} else {oddNumber++;}
        }
    }
}
console.log(` нулевых ${zeroNumber}  четных ${evenNumber}  нечетных ${oddNumber}`);