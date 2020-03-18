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
const targetSaveIcons = document.body.querySelectorAll('.fa-save');
const currentHour = moment().toObject().hours;
let targetCurrentHourTimeSlot;

// Time shown on top of page header.
// ===========================================================================
targetCurrentTime.append(currentTime);

// Function to style time slots depending on hour and if it passed already
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

// Function to style time slots for current hour, used for switch case
// ===========================================================================
const targetInputStyleByCurrentHour = timeSlot => {
    targetCurrentHourTimeSlot =
        targetDOMTableRows[timeSlot].cells[1].children[0];
    targetCurrentHourTimeSlot.style.backgroundColor = '#f9ca24'; //timeslot turns yellow during current business hour.
};

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

// Saves into local storage
// ===========================================================================
const saveButton = () => {
    let taskData;
    let timeData;
    let inputValues;
    let inputValueTime;
    let appendValueToInputField;

    targetSaveIcons.forEach(targetSaveIcon => {
        targetSaveIcon.addEventListener('click', event => {
            // push into task array
            // ========================================================================
            taskData = localStorage.getItem('task');
            taskData = taskData ? taskData.split(',') : [];
            inputValues = document.body.querySelectorAll(
                `.input-field[data-save-icon-id="${event.target.dataset.saveIconId}"]`
            );
            taskData.push(inputValues[0].value);
            JSON.stringify(localStorage.setItem('task', taskData));

            inputValues[0].textContent = taskData; //appends to input field

            // push into time array
            // ========================================================================
            inputValueTime = inputValues[0].dataset.saveIconId;
            timeData = localStorage.getItem('time');
            timeData = timeData ? timeData.split(',') : [];
            timeData.push(inputValueTime);
            JSON.stringify(localStorage.setItem('time', timeData));
            console.log(localStorage);
            // on page refresh event, load local storage items
        });
    });
};
saveButton();