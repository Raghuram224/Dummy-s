const QUESTIONS= document.getElementsByClassName("questions");

let questionsAndAnswers=["What is coding and programming? ",
                         "Coding tells a machine which actions to perform and how to complete tasks. Programming languages provide the rules for building websites, apps, and other computer-based technologies. Each programming language helps humans accurately communicate with machines",
                         "Is SQL is a programming language?",
                         "SQL stands for Structured Query Language, which is a programming language used to communicate with relational databases. The acronym is pronounced like the word sequel, but some people will just use the three letters S, Q, and L.",
                         "What are programming skills?",
                         "Programming skills, or coding skills, are the skills we use to write instructions for computers, applications, or software. They include different programming languages and concepts. What skills do I need to code? To start, you'll need knowledge of at least one programming language.",
                         "Is coding hard to learn?",
                         "No, coding isn't hard to learn, but it isn't a walk in the park either. It can be a steep hill to climb at first—but you'll likely surprise yourself by how much you can learn. As you progress, learning to code becomes easier. The key to success is not giving up on the early stages "
                      
                        ]

let wrapper= document.getElementById("wrapper");

let finalString="";
let questionString="";
let answerString="";
let count=0;

function htmlAdder(question,answer){
    
    finalString += `<div class="questions"> \n ${question+ answer}  \n </div> \n`

    questionString="";
    answerString="";
    count=0
    return finalString
    

}


for(let i=0;i<=questionsAndAnswers.length;i++){
    if(count==2){
        let result = htmlAdder(questionString, answerString);
       
    }
    if(i%2==0){
        // console.log("hi");
       questionString+=` <div class="container"> \n <p class="qn"> ${questionsAndAnswers[i]} \n </p> \n
       <img src="assets/down.svg" alt="">\n </div> \n`;
     
    }
    else{
        answerString+=`<div class="ans">  \n <p> ${questionsAndAnswers[i]} </p> \n </div> \n`;
        
    }

 
    count++;
}

wrapper.innerHTML= `${finalString} `;



for(let i=0; i<QUESTIONS.length;i++){
    QUESTIONS[i].addEventListener('click',function(){
        this.classList.toggle('active');
        let img = document.getElementsByClassName(`img${i}`);
        
      
    })

}