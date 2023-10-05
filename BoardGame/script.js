const WORDS = [ "lite","clay", "play", "sing", "bird", "bean", "game", "rice", "four", "five", "tree", "keep", "dark", "moon", "cool"];
// const WORDS=["name","clay"];
console.log(WORDS.length);
let winnigCount=1;
const BOXES=_('boxes');
const INP=_('inp');
let clickedValue=[];
let selectedText = [];

const btn=_('startbtn');
function _(id){
    return document.getElementById(id);
}


function matchWord(element){
    let output="";
    clickedValue.push(element.id);
    selectedText.push(element.textContent);
    
 
    element.style.backgroundColor='#00FF7F';
    output+=element.textContent;
    
    
    INP.textContent+=output.split(" ").join("");
    
}
function check(){
    
    let guess=INP.textContent;
    guess=guess.split(" ").join("");
    console.log(guess);
    // if(winnigCount!=(WORDS.length)){

        if(WORDS.includes(guess)){
            
            if(winnigCount==WORDS.length){
                console.log(btn.textContent)
                    BOXES.innerHTML=`<p class="won">You Won!</p>`;
                    btn.textContent= "Restart";
                    INP.textContent=" ";
                console.log("#"+winnigCount);
            }
            winnigCount++;
            INP.textContent=" ";
            for(let i =0; i<clickedValue.length;i++){
                document.getElementById(clickedValue[i]).style.visibility="hidden";
                document.getElementById(clickedValue[i]).style.visibility="hidden";
            }
            clickedValue = [];
            selectedText = [];
        }
        else{
            console.log("not exist");
            INP.textContent=" ";
            let string="";
        
            for(let i =0; i<clickedValue.length;i++){
                document.getElementById(clickedValue[i]).firstElementChild.textContent = selectedText[i];
                document.getElementById(clickedValue[i]).firstElementChild.textContent = selectedText[i];
                document.getElementById(clickedValue[i]).style.backgroundColor="transparent";

            }
        
            clickedValue = [];
            selectedText = [];
        }

    console.log(winnigCount);


    }
    // else{        
    //     console.log(btn.textContent)
    //     BOXES.innerHTML=`<p class="won">You Won!</p>`;
    //     btn.textContent= "Restart";
    //     INP.textContent=" "
    //     winnigCount=1;
     



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
// function game(element){

function main(){
    // winnigCount=1;
    btn.textContent= "Restart";
    // shuffledArr=shuffledArr.sort(()=> Math.random()-0.5);
    let newList=splitArr().sort(()=>Math.random()-0.5);
    
    let string="";
    for(let i=0;i<(WORDS.length*2);i++){
         string+=`<span class="box" id=b${i} onclick="matchWord(this)"> <a class="num" >${newList[i]}</a></span>`;
        //string+=`<span class="box num" id=b${i}  onclick="matchWord(this)"> ${newList[i]}</span>`;
    }
    BOXES.innerHTML=string;
    
}
    
