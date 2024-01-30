const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases=["Sofware Engineer....","Mentor...","Guider.."];

const pharseIndex=0;
let letterIndex=0;
function printLetters(phrase){

     if(letterIndex==phrase.length){
        clearLetters();
     }
     else if(letterIndex<pharseIndex){
        dynamicContent.textContent+=phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(function(){
            printLetters(phrase);
        },200)

        
     }

}

function clearLetters(){
    if(letterIndex>-1){
        let updatePhrase=""
        for(let index=0;index<letterIndex;index++){
            updatePhrase+=phrases[pharseIndex].charAt(index);
        }
        console.log(updatePhrase);
        dynamicContent.textContent=updatePhrase;
        letterIndex++;
        setTimeout(clearLetters,100);
    }
}

printLetters(phrases[pharseIndex]);