const WORDS = [ "clay", "play", "sing", "bird", "bean", "game", "rice", "four", "five", "tree", "keep", "dark", "moon", "cool"];
console.log(WORDS.length);

const BOXES=_('boxes');
const INP=_('inp');
function _(id){
    return document.getElementById(id);
}


function matchWord(element){
    
    console.log(element);
    element.style.backgroundColor='green';
    INP.textContent+=element.textContent;

}
function check(){
    let guess=INP.textContent;
    if(WORDS.includes(guess)){
        
        INP.textContent=" ";
    }
    else{
        console.log("not exist");
        INP.textContent=" ";
    }
}

function splitArr(){
    let scrambledArray=[]
    for(let i=0;i<WORDS.length;i++){
        let mid=Math.floor(WORDS[i].length/2);
        let first=WORDS[i].slice(0,mid);
        let last= WORDS[i].slice(mid);
        scrambledArray.push(first,last);
    }
    console.log(scrambledArray);
    return scrambledArray;
}
function main(){
    let newList=splitArr();
    let string="";
    for(let i=0;i<(WORDS.length*2);i++){
        string+=`<span class="box" id=b${i} > <a class="num" onclick="matchWord(this)">${newList[i]}</a></span>`;
    }
    BOXES.innerHTML=string;
    
}
    
