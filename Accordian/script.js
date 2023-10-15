
const QUESTIONS= document.getElementsByClassName("questions");

for(let i=0; i<QUESTIONS.length;i++){
    QUESTIONS[i].addEventListener('click',function(){
        this.classList.toggle('active');
        let img = document.getElementsByClassName(`img${i}`);
        
      
    })

}