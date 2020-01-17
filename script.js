const randomImage = document.querySelector(".randomImage"); 
const randomImage2 = document.querySelector(".randomImage2"); 
const alertDiv = document.querySelector("#alertDiv");

function randomImg()
    {
    let randomNumber = Math.floor(Math.random() * 53) + 1; 
    let imgName = randomNumber + ".png";
    randomImage.src= "images" + "/" + imgName;

    let difference = 0; 
    if (randomNumber<=13 && randomNumber >0) 
    { 
    	difference = randomNumber; 
    } 

    else if(randomNumber>13 && randomNumber<27)
    { 
    	difference = randomNumber-13;
    } 

    else if(randomNumber>26 && randomNumber<40)
    {
    	difference = randomNumber-26;
    }

     else if(randomNumber>39 && randomNumber<54)
    {
    	difference = randomNumber-39;
    } 
    return difference;
    }

    function randomImg2(){
    let randomNumber2 = Math.floor(Math.random() * 53) + 1;
    let imgName = randomNumber2 + ".png";
    randomImage2.src= "images" + "/" + imgName;

    let difference = 0;

    if (randomNumber2<=13 && randomNumber2 >0) 
    {
    	difference = randomNumber2;
    } 
    else if(randomNumber2>13 && randomNumber2<27)
    {
    	difference = randomNumber2-13;
    } 
    else if(randomNumber2>26 && randomNumber2<40)
    {
    	difference = randomNumber2-26;
    } 
    else if(randomNumber2>39 && randomNumber2<54)
    {
    	difference = randomNumber2-39;
    } 
    return difference;
    }

    function luckyNine(){
 	alertDiv.innerHTML = "";
 	let total = 0; 
 	total = randomImg() + randomImg2();

     if (total ==9)
     {		
 	alertDiv.innerHTML += "LUCKY!!  " + total + "  YOU WIN!!!";
    alertDiv.style.color = "black";
     
     } 

     else

     {			
    alertDiv.innerHTML+= "You got " + total + " points. You lose!";
 	alertDiv.style.color = "black";
 	}
 }