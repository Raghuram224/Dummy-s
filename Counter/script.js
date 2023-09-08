let result=0;
const output=document.getElementById("result");

function add(){
    result++;
    output.textContent=result;

}
function sub(){
    if(result>0){
        result--;
        output.textContent=result;
    }
    else{
        output.textContent=0;
    }
    
    
}

