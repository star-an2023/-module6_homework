let timeid;
function testTime(fistNumber,lastNumber){
    
        timeid=setInterval((fistNumber,lastNumber) => {
            for(i=fistNumber;i<=lastNumber;i++){
                console.log(i)}
            },1000,fistNumber,lastNumber);
 
    return(timeid);
}

timeid=testTime(2,5);
const timeInterval=setTimeout(function(timeid){clearInterval(timeid)},(5-2+1)*1000,timeid)

