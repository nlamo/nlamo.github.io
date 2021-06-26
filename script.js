// Creating image elements with a random number inserted via literals
// Used to randomize the display of class .sketches-section

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

let randomNumArray = [];
let imageArray = [];
let counter = 0;


// while loop for generating unique random numbers, which are inserted into an array
while (counter < 5) {    

    let newRandom = getRandomNum(5);

    if (randomNumArray.includes(newRandom)) {
        continue;
    }
    else {
        randomNumArray.push(newRandom);
    }
    
    counter++;
}

// pushing images to the array, which are numerated by each random number element
randomNumArray.forEach(number => imageArray.push(`img/box${number}.png`));

// Counter is for iterating through the elements by class name
// getElementById() is best practice but I've stuck with this for the time being
counter = 0;

// forEach for dynamically creating the elements each time page is loaded
imageArray.forEach(image => {

    let newImage = document.createElement("IMG");
    let boxElement = document.getElementsByClassName("box")[counter];
    boxElement.appendChild(newImage).src = image;

    counter++;

    }
);