// Variables for DOM manipulation
// ===========================================================================
const currentTime = document.createTextNode(
    moment().format('dddd, MMMM Do YYYY, h:mm a')
);
const targetCurrentTime = document.body.querySelector('.current-time-h2');
const targetDOMTableParent = document.body.getElementsByTagName('table'); //for table style color
const targetDOMTableRows = targetDOMTableParent[0].rows; //for table style color
const targetInputFieldsOnly = document.body.getElementsByClassName(
    'input-field'
); //for table style color
const currentHour = moment().toObject().hours;
let target;
let getTask;

// Time shown on top of page header.
// ===========================================================================
targetCurrentTime.append(currentTime);

// Coloring in time slots depending on current hour of day.
// ===========================================================================

const hasHourPassed = (businessHour, timeSlot) => {
    if (currentHour > businessHour) {
        for (let i = timeSlot; i >= 1; i--) {
            targetDOMTableRows[i].cells[1].children[0].style.backgroundColor =
                '#95afc0'; //timeslot grays out after current hour passes
        }
    } else if (
        (currentHour >= 18 && currentHour <= 24) ||
        (currentHour >= 1 && currentHour <= 8)
    ) {
        for (let i = 0; i < targetInputFieldsOnly.length; i++) {
            targetInputFieldsOnly[i].style.backgroundColor = 'white'; //timeslot turns white outside of business hours.
        }
    }
};

// functions for dynamically styled time slots for current hour
// ===========================================================================
const targetInputStyleByCurrentHour = timeSlot => {
    target = targetDOMTableRows[timeSlot].cells[1].children[0];
    target.style.backgroundColor = '#f9ca24'; //timeslot turns yellow during current business hour.
};

// First param equates business hour; second param equates corresponding time slot.
hasHourPassed(9, 1);
hasHourPassed(10, 2);
hasHourPassed(11, 3);
hasHourPassed(12, 4);
hasHourPassed(13, 5);
hasHourPassed(14, 6);
hasHourPassed(15, 7);
hasHourPassed(16, 8);
hasHourPassed(17, 9);

switch (currentHour) {
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

const saveButton = () => {
    const saveIcons = document.body.querySelectorAll('.fa-save');
    let taskData;
    let timeData;
    let inputValues;
    let inputValueTime;

    saveIcons.forEach(saveIcon => {
        saveIcon.addEventListener('click', event => {
            // push into task array
            // ========================================================================
            taskData = localStorage.getItem('task');
            taskData = taskData ? taskData.split(',') : [];
            inputValues = document.body.querySelectorAll(
                `.input-field[data-save-icon-id="${event.target.dataset.saveIconId}"]`
            );
            taskData.push(inputValues[0].value);
            JSON.stringify(localStorage.setItem('task', taskData));

            // push into time array
            // ========================================================================
            inputValueTime = inputValues[0].dataset.saveIconId;
            timeData = localStorage.getItem('time');
            timeData = timeData ? timeData.split(',') : [];
            timeData.push(inputValueTime);
            JSON.stringify(localStorage.setItem('time', timeData));
            console.log(localStorage);
        });
    });
};

saveButton();