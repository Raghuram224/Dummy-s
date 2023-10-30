let displayText= document.querySelector(".displaytext");
let resultText=document.querySelector(".section");
let textString="";
let keyArr="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,;:''()[]{}/!@#$%^&*-_? ";
let n = 0;
let timeleft=60;
// console.log(content);
let spanId=0;
let traverseN=0;
// let contentList=[`In addition to its practical benefits, nature also has a profound impact on our physical and mental health. Spending time in nature has been shown to reduce stress, improve mood, and boost creativity. Nature can also help us to connect with our spiritual side and to appreciate the beauty of the world around us.`
//                 ,`asdfasdf`]
let contentList=["hello bro"];
let content=contentList[0].split(" ");
let isTimeRun=true;
let displayTime= document.getElementById("timer");
let correctLetters=0;
let wrongLetters=0;
let texEndNumber=0;
let time;
function timer(){
    if(timeleft >0){
        timeleft--;
        displayTime.textContent=timeleft;
    }else{
        
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
    if(n==texEndNumber-1 || timeleft===0){
        resultText.innerHTML=showResults();
        resultCaller();
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



