let displayText= document.querySelector(".displaytext");
let resultText=document.querySelector(".section");

let textString="";
let keyArr="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,;:''()[]{}/!@#$%^&*-_? ";
let n = 0;
let timeleft=60;
// console.log(content);
let spanId=0;
// let traverseN=0;
let contentList=[`winston is one of the most laid-back people i know he is tall and slim with black hair and he always wears a t-shirt and black jeans his jeans have holes in them and his baseball boots are scruffy too he usually sits at the back of the class and he often seems to be asleep however when the exam results are given out he always gets an "A" i don't think hes as lazy as he appears to be science of creating sets of instructions that enable a computer to perform specific tasks or solve problems. It begins with identifying a problem or task that can be automated or addressed using a computer. Programmers then break down the problem, design algorithms, and write code in a programming language to guide the computer's actions. Syntax and semantics play a crucial role, as code must adhere to the rules and conventions of the chosen programming language and be logically sound. Testing and debugging are essential steps to ensure the code produces the desired outcomes. Optimization is often employed.`
                ]
// let contentList=["hello bro"];
let content=contentList[0].split(" ");
let isTimeRun=true;
let displayTime= document.getElementById("timer");
let correctLetters=0;
let wrongLetters=0;
let texEndNumber=0;
let time;
function timer(){
    console.log("timer called")
    if(timeleft >0){
        timeleft--;
        displayTime.textContent=timeleft;
    }else{
        console.log("Should stop now...")
        clearInterval(timer);
        resultCaller();
        
    }


}


function textAdder(content){
    for(let i=0;i<content.length;i++){
        let st="";
        let word=content[i];
        // console.log(word);
        for(let j=0; j<word.length;j++){
            // console.log(content[i]);
            st+=`<span id="sp${spanId}">${word[j]}</span>\n`;
            spanId++;
            texEndNumber++;
        }
        
        spanId++;
        texEndNumber++;
        textString+=`<div id="wordId${i}" class="words">\n${st}</div>\n 
                     <span id="sp${spanId}" class="space"> </span>\n`;
            // spanId++;
    }
    return textString;
}

function showResults(){
    // let res= document.getElementById("wpm");
    let accuracy = (correctLetters+wrongLetters)/5;
    let st=`<div class="results">
        <h3>Results!</h3>    
        <p>Words per minute <span id="wpm">${accuracy}</span> </p>
        </div>`;
        return st;
}


function keyChecker(event){
    console.log(n, texEndNumber)
    if(n>=texEndNumber-2 || timeleft===0){
        clearInterval(timer);
        resultText.innerHTML=showResults();
        resultCaller();
        return 0;
    }
    if(isTimeRun==true){   
             
        time = setInterval(timer,1000);
        isTimeRun=false;
    }
    let letter = displayText.getElementsByTagName("span")


    if(event.key==="Backspace" && n>0){
        n--;
        if(letter[n].classList.contains("white")){
            letter[n].classList.remove("white");
            correctLetters--;
            
        }else{
            letter[n].classList.remove("red");
            wrongLetters--;
            
        }
    }
    else if(keyArr.includes(event.key)){
        // console.log(n);
        if (event.key === letter[n].textContent){            
            letter[n].classList.toggle("white");
            correctLetters++;
        }
        else{
            letter[n].classList.toggle("red");
            wrongLetters++;
            
        }
        n++;
    }
    
}

function resultCaller(){
    if(n==texEndNumber-1 || timeleft===0){
        resultText.innerHTML=showResults();
        clearInterval(timer);
    }
}


displayText.innerHTML=textAdder(content);

document.body.addEventListener("keydown",keyChecker);




