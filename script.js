// Clicking on the save button will store the time and user input in localStorage.


// variables for DOM manipulation
// ===========================================================================
const currentTime = document.createTextNode(moment().format("dddd, MMMM Do YYYY, h:mm a"))
const targetCurrentTime = document.body.querySelector(".current-time-h2")
const targetDOMTableParent = document.body.getElementsByTagName("table");
const targetDOMTableRows = targetDOMTableParent[0].rows;
const targetInputFieldsOnly = document.body.getElementsByClassName("input-field")
const hour = moment().toObject().hours;
let target;
let timePassed;


// time shown on header
// ===========================================================================
targetCurrentTime.append(currentTime);


// functions for dynamically styled time slots for current hour
// ===========================================================================

const targetInputStyleByCurrentHour = (indexOfInputField) => {
  target = targetDOMTableRows[indexOfInputField].cells[1].children[0];
  target.style.backgroundColor = "#f9ca24";
}

// functions for dynamically styled time slots for passed hours
// ===========================================================================
// first for loop conditional grays out the input fields which passed
// second for loop conditional resets input fields style to white outside of business hours.

const hasHourPassed = (timeslot, indexOfInputField) => {
  if (hour > timeslot) {
    for (let i = indexOfInputField; i >= 1; i--) {
      targetDOMTableRows[i].cells[1].children[0].style.backgroundColor = "#95afc0";
    }
  } else if (hour >= 18 && hour <= 24 || hour >= 1 && hour <= 8){
    for (let i = 0; i < targetInputFieldsOnly.length; i++) {
      console.log(targetInputFieldsOnly[i])
      targetInputFieldsOnly[i].style.backgroundColor = "white";
    }
  }
}

hasHourPassed(9, 1)
hasHourPassed(10, 2)
hasHourPassed(11, 3)
hasHourPassed(12, 4)
hasHourPassed(13, 5)
hasHourPassed(14, 6)
hasHourPassed(15, 7)
hasHourPassed(16, 8)
hasHourPassed(17, 9)

switch(hour) {
  case 9:
    targetInputStyleByCurrentHour(1);
    break;
  case 10:
    targetInputStyleByCurrentHour(2);
    break;
  case 11:
    targetInputStyleByCurrentHour(3);
    break;
  case 12:
    targetInputStyleByCurrentHour(4);
    break;
  case 13:
    targetInputStyleByCurrentHour(5);
    break;
  case 14:
    targetInputStyleByCurrentHour(6);
    break;
  case 15:
    targetInputStyleByCurrentHour(7);
    break;
  case 16:
    targetInputStyleByCurrentHour(8);
    break;
  case 17:
    targetInputStyleByCurrentHour(9);
    break;
  default:
    break;
}

// pretend it's 9 am going forward
// background should be, say white.
// if moment object's hour === 9,
  // target style background color to equal a different color indicating current time
// if moment object's hour > 9,
  // target style background color to equal a different color indicating hour has passed


// Add CSS & JS to tr to change colors dynamically, depending on time of day.
// user enters task
  // save button ONCLICK 
    // SETS to local storage
    // does not lose data after refreshing page.




    // const targetInputField = document.body.querySelector(".input-field");
// const currentTimeColor = targetInputField.style.backgroundColor = "#dff9fb";
// const timePassedColor = targetInputField.style.backgroundColor = "#95afc0";




// write for loop iterating over rows children
  // create two variables,
    // first variable will be first part of inputField targeting
    // second variable will be last part of inputField targeting
    // third variable is equal to [i], which is set in the for loop

    // timePassed = targetDOMTableRows[inputFieldRowIndex].cells[1].children[0];
    // timePassed.style.backgroundColor = "gray";




// console.log(targetDOMTableParent)
// console.log(targetDOMTableParent[0].rows[1].cells[1].children[0])
// console.log(targetDOMTableParent[0].rows[2].cells[1].children[0])
// console.log(targetDOMTableRows.children[1].childNodes[0])

// console.log(targetDOMTableRows)

// console.log(hour)
// console.log("==============================")



// const targetDOMTableRows = document.body.querySelector(".table-row");
// const targetInputField = targetDOMTableRows.children[1].childNodes[0];
// const targetInputStyleByCurrentHour = () => {
//   for (let i = 1; i < targetDOMTableRows.length; i++) {
//     target = targetDOMTableRows[i].cells[1].children[0];
//     console.log(target);
//   }
// }


// const targetInputStyleWhenHourPasses = (inputFieldHour, inputFieldRowIndex) => {
//   if (hour > inputFieldHour) {
//     console.log('hi')
//   }
// }


