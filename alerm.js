const date = new Date();
const decideTimeButton = document.querySelector(".decideTimeButton");

decideTimeButton.addEventListener("click", function () {
    //アラームをかける時間を取得
    let alermTime = document.querySelector("input[name='time']").value;
    let time = alermTime.split(':');
});
let nowHH = date.getHours();
let nowMM = date.getMinutes();