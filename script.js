// Clicking on the save button will store the time and user input in localStorage.

// variables for DOM manipulation
// ===========================================================================
const currentTime = document.createTextNode(
    moment().format('dddd, MMMM Do YYYY, h:mm a')
);
const targetCurrentTime = document.body.querySelector('.current-time-h2');
const targetDOMTableParent = document.body.getElementsByTagName('table');
const targetDOMTableRows = targetDOMTableParent[0].rows;
const targetInputFieldsOnly = document.body.getElementsByClassName(
    'input-field'
);
const targetAllIcons = document.body.getElementsByClassName('fa-save');
const hour = moment().toObject().hours;
let resultsArr = [];
let array = [];
let setTask;
let getTask;
let target;
let timePassed;
let textValue;
let appendText;
let createText;
let currentTarget;

// time shown on header
// ===========================================================================
targetCurrentTime.append(currentTime);

// functions for dynamically styled time slots for current hour
// ===========================================================================
const targetInputStyleByCurrentHour = indexOfInputField => {
    target = targetDOMTableRows[indexOfInputField].cells[1].children[0];
    target.style.backgroundColor = '#f9ca24';
};

// functions for dynamically styled time slots for passed hours
// ===========================================================================
// first for loop conditional grays out the input fields which passed
// second for loop conditional resets input fields style to white outside of business hours.

const hasHourPassed = (timeslot, indexOfInputField) => {
    if (hour > timeslot) {
        for (let i = indexOfInputField; i >= 1; i--) {
            targetDOMTableRows[i].cells[1].children[0].style.backgroundColor =
                '#95afc0';
        }
    } else if ((hour >= 18 && hour <= 24) || (hour >= 1 && hour <= 8)) {
        for (let i = 0; i < targetInputFieldsOnly.length; i++) {
            console.log(targetInputFieldsOnly[i]);
            targetInputFieldsOnly[i].style.backgroundColor = 'white';
        }
    }
};

hasHourPassed(9, 1);
hasHourPassed(10, 2);
hasHourPassed(11, 3);
hasHourPassed(12, 4);
hasHourPassed(13, 5);
hasHourPassed(14, 6);
hasHourPassed(15, 7);
hasHourPassed(16, 8);
hasHourPassed(17, 9);

switch (hour) {
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

// targets all icons to save on click
// ===========================================================================
const saveButtonOnClick = () => {
    for (let i = 0; i < targetAllIcons.length; i++) {
        targetAllIcons[i].addEventListener('click', () => {
            getTask = JSON.parse(localStorage.getItem('task'));
            currentTarget = targetInputFieldsOnly[i];
            textValue = currentTarget.value;
            createText = currentTarget.innerHTML = textValue;

            // set to local storage;
            setTask = JSON.stringify(localStorage.setItem('task', createText));
            resultsArr.push(JSON.parse(localStorage.getItem('task')));
            array.push({ task: createText });
            resultsArr.push(setTask);
            getTask = localStorage.getItem('task');
            getTask;
        });
    }
};

saveButtonOnClick();
