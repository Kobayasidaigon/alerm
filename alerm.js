const decideTimeButton = document.querySelector(".decideTimeButton");
decideTimeButton.addEventListener("click", function () {
  //アラームをかける時間を取得
  let decideTime = document.querySelector("input[name='time']").value;
  let time = decideTime.split(":");

  var tm = 1000;
  set = setInterval(fn, tm);
});

var fn = function () {
  console.log("10秒経過しました");
};

//初期表示で現在時刻を表示
window.onload = function () {
  displayTime();
  const date = new Date();
  //画面が表示されたタイミングで後どれだけで１分進むか計算
  const remainingSeconds = 60000 - date.getSeconds() * 1000;
  setTimeout(() => {
    displayTime();
    //このタイミングで一分たつごとに表示が変わります。
    startMinutesInterval;
  }, remainingSeconds);
};

//時間経過とともに表示変化
var startMinutesInterval = setInterval(() => {
  displayTime();
}, 60000);

//画面に表示される時間を取得、反映
function displayTime() {
  const date = new Date();
  let DisplayTime = document.querySelector("input[name='time']");
  const DisplayTimeHH = toDoubleDigits(date.getHours());
  const DisplayTimeMM = toDoubleDigits(date.getMinutes());
  DisplayTime.value = DisplayTimeHH + ":" + DisplayTimeMM;
  document.querySelector(".now-time").textContent = DisplayTime.value;
}

//時、分が一桁の時０を追加する
var toDoubleDigits = function (num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};
