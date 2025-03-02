// date-section (dynamic time set )
const today = new Date();
const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
const dateParts = formattedDate.split(",");

document.querySelector("#date-section p.weekday").innerText = dateParts[0] + ",";
document.querySelector("#date-section p.date").innerText = dateParts[1] + " " + dateParts[2];



const taskNumberElement = document.getElementById("task-number");
const totalPointElement = document.getElementById("total-point");
const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach(button => {
    button.addEventListener("click", function () {
        let taskNumber = parseInt(taskNumberElement.innerText);
        let totalPoint = parseInt(totalPointElement.innerText);

        if (taskNumber > 0) {
            taskNumberElement.innerText = taskNumber - 1;
        }
        totalPointElement.innerText = totalPoint + 1;

        this.disabled = true;
        this.style.backgroundColor = "#A0AEC0";
        this.style.cursor = "not-allowed";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".complete-btn");
    const historySection = document.getElementById("history-section");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            alert("Board Updated Successfully");

            this.disabled = true;
            this.style.opacity = "0.5";

            const card = this.closest('.mb-3');
            const taskTitle = card.querySelector(".task-title").innerText;

            const historyItem = document.createElement("div");
            historyItem.innerText ="You have completed the task "+taskTitle + " at " + dateParts+";";
            historySection.appendChild(historyItem);
        });
    });
});

const clearStory = document.querySelector('.clear-story')
clearStory.addEventListener('click', ()=>{
    window.location.reload()
})


// Avarar dynamic 
const colors = [
    "rgba(255, 0, 0, 1)",    // Red
    "rgba(0, 0, 255, 1)",    // Blue
    "rgba(0, 128, 0, 1)",    // Green
    "rgba(255, 255, 0, 1)",  // Yellow
    "rgba(128, 0, 128, 1)",  // Purple
    "rgba(255, 165, 0, 1)",  // Orange
    "rgba(255, 192, 203, 1)" // Pink
];

function makeColor() {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the random color to the background
    document.body.style.backgroundColor = randomColor;
}
