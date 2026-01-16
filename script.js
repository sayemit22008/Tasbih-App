let count = 0;
let tasbih = 0;
let goal = 0;

const MAX_COUNT = 100;
const GOAL_LIMIT = 10;

function increment() {
    count++;

    if (count === MAX_COUNT) {
        tasbih++;
        count = 0;

        if (tasbih % GOAL_LIMIT === 0) {
            goal++;
            alert("🎉 Spiritual Goal Completed!");
        }
    }

    updateUI();
}

function resetCounter() {
    count = 0;
    tasbih = 0;
    goal = 0;
    updateUI();
}

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("tasbih").innerText = tasbih;
    document.getElementById("goal").innerText = goal;
}