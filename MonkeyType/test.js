let timeleft=60
function timer(){
    if(timeleft >0){
        timeleft--;
        console.log(timeleft);
    }else{
        clearInterval(timer);
    }


}
setInterval(timer,1000)