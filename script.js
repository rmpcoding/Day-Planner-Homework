/* 
Clicking on the save button will store the time and user input in localStorage.

Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.


*/
const currentTime = document.createTextNode(moment().format("dddd, MMMM Do YYYY, h:mm a"))
const targetCurrentTime = document.body.querySelector(".current-time-h2")

targetCurrentTime.append(currentTime);

console.log(targetCurrentTime)
console.log(currentTime)

// GET RID OF INPUT FIELDS
  // REPLACE WITH SPAN ELEMENTS
// Add CSS & JS to tr to change colors dynamically, depending on time of day.
// user enters task
  // save button ONCLICK 
    // SETS to local storage
    // does not lose data after refreshing page.