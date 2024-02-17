// function play(){

// //hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// //show the playground

// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');

// } 
function continueGame()
{
    // generate a random alphabet 
   const alphabet = getRandomAlphabet();
   

   //show the randomly alphabet to the screen

   const currentRandomAlphabet = document.getElementById('current-alphabet');
   currentRandomAlphabet.innerText = alphabet;
  
//    show the selected items background color 
   setBackgroundById(alphabet);
//    removeBackgroundById(alphabet);
} 
// function continueGame()
// {
//     //generate a random alphabet
//     const alphabet = getRandomAlphabet();
// }
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}