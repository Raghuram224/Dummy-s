const WORDS = ["come", "bell", "bear", "play", "sing", "bird", "bean", "game", "rice", "four", "five", "tree", "keep", "dark", "moon", "cool"];
const BOXES=_('boxes');

function _(id){
    return document.getElementById(id);
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
    for(let i=1;i<=(WORDS.length*2);i++){
        string+=`<span class="box" id=b${i} onclick="disappear(this)"> <a class="num">${newList[i]}</a></span>`;
    }
    BOXES.innerHTML=string;
    
}
    
