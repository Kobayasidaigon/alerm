
const decideTimeButton = document.querySelector(".decideTimeButton");
decideTimeButton.addEventListener("click", function () {
  //ストレージに値を保存してブラウザを閉じても値を残します
  localStorage.setItem("decideTime", document.querySelector("input[name='time']").value);
  //アラームをかける時間を取得
  let decideTime = localStorage.getItem("decideTime");
  set = setInterval(time_confirmation(decideTime), 60000);
});

//アラームを鳴らすかチェック
var time_confirmation = function (decideTime) {
  const NowDisplayTime = getDisplayTime();
  var time_confirm = setInterval(() => {
    if (decideTime === NowDisplayTime) {
      alert("時間だよ");
      clearInterval(time_confirm);
      localStorage.clear("decideTime");
    }
  }, 60000);
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
  let DisplayTime = document.querySelector("input[name='time']");
  DisplayTime.value = getDisplayTime();
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

//表示する時刻を値として返す
function getDisplayTime() {
  const date = new Date();
  const DisplayTimeHH = toDoubleDigits(date.getHours());
  const DisplayTimeMM = toDoubleDigits(date.getMinutes());
  return DisplayTimeHH + ":" + DisplayTimeMM;
}
