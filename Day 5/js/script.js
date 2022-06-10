//---------------------------------------------- VARIABLES ---------------------------------------------------------

// shortcut to get elements
function getElements(element) { 
    if (element.charAt(0) === "#") { // If passed an ID
      return document.querySelector(element); //returns single element
    } else {return document.querySelectorAll(element); // Otherwise, returns a nodelist
    }
};

// var list

var screen = getElements("#calculator-screen"), //calculator screen
    equals = getElements("#equals"), // Equal button
    nums = getElements(".num"), // NodeList of numbers
    ops = getElements(".operator"), // NodeList of operators
    curNum = "", // Current number
    prevNum = "", // First number
    resultNum, // Result
    operator; //operator

console.log(screen, equals, nums, ops)

// ----------------------------------------- FUNCTIONS -------------------------------------------------------

//get clicked number
function getNum(num){
    if (resultNum) { //if a result is displayed, reset num
        curNum = num;
        resultNum = "";
    } else { //otherwise, add digit to previous num
        curNum += num;
    }
    console.log(curNum)
    screen.textContent = curNum; //display current num
    
};

//When operator is clicked, move curNum to prevNum and save operator
function moveNum(op){
    prevNum = curNum; //pass current to previous
    curNum = ""; //reset current
    operator = op; //save operator
    equals = ""; //reset result

    console.log(operator)
};

//display result when equals is clicked
function displayNum(){
    //convert strings to numbers
    prevNum = parseFloat(prevNum);
    curNum = parseFloat(curNum);

    //caluclate
    switch (operator) {
        case "plus":
            resultNum = prevNum + curNum;
            break
        case "minus":
            resultNum = prevNum - curNum;
            break
        case "times":
            resultNum = prevNum * curNum;
            break
        case "divide":
            resultNum = prevNum / curNum;
            break
        default:
            resultNum = curNum;
    }

    //handle exceptions
    if (!isFinite(resultNum)) {
            resultNum = "Mi hai rotta :(";     
    }

    //display num
    screen.textContent = resultNum;
    equals = resultNum;
    prevNum = 0;
    curNum = resultNum;

    console.log(resultNum);

};

//clear button
function clearScreen(){
    curNum = "";
    prevNum = "";
    screen.textContent = "0";
    equals = "";
}

//----------------------------------- SURPRISE! ------------------------------------

function surprise(){
    let container = document.getElementById("container");
    let devilAudio = new Audio('/audio/666.mp3')
    let revelationAudio = new Audio('/audio/revelation.mp3');
    if (resultNum == 666) {
        container.style.backgroundImage ="url('/img/devil.webp')";
        container.style.animation = "shake 0.5s infinite";
        devilAudio.play();
        setTimeout(toNormality, 4700);
        
    }

    if (resultNum == 42) {
        container.style.backgroundImage = "url('/img/42.jpg')";
        container.style.animation = "leave 5s infinite";
        revelationAudio.play();
        setTimeout(toNormality, 4700);
        
    }
}

function toNormality(){
    let container = document.getElementById("container");
    container.style.backgroundImage = "none";
    container.style.animation = "none";
}
