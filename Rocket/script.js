function _(id){
    return document.getElementById(id);
}

let countdown=_('element3');
const ROCKET= _('element2');
let title=_('element1');
let btn=_('btn')

let counter=2;
function launch(){

    let id =setTimeout(launch,1000);
        if(counter==0){
            let audio1= new Audio('launch.mp3');
            audio1.play();
            title.style.display="none";
            // ROCKET.style.marginBottom="5000px";
            ROCKET.style.transform="translateY(-2000%)";
            ROCKET.style.transition="5s ease-in-out"
          
            countdown.style.display="none";
            clearTimeout(id);
            return;
        }
        counter--;
        countdown.textContent=counter;
    console.log(counter)
        
}


function main(){
    let  audio1 = new Audio('ev.mp3');
    audio1.play();    
    let id = setTimeout(launch,1000);
    btn.style.display="none";
    

}