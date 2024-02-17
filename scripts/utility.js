function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
} 

function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
} 

function setBackgroundById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
} 

function removeBackgroundById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getRandomAlphabet()
{ 
    //create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    //get a random index between 0-25
    const randomIndex = Math.random()*25;
    const index = Math.round(randomIndex);
    console.log(index);

    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;
} 

// const getRandomAlphabet()
// { 
//     // create a alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);

//     // generate a randomIndex 
//     const randomIndex = Math.random()*25;
//     const index = Math.round(randomIndex);
//     console.log(index);

//     const alphabet =alphabets[index];
//     return alphabet;
// }