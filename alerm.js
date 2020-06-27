const decideTimeButton = document.querySelector(".decideTimeButton");
decideTimeButton.addEventListener("click", function () {
  //ストレージに値を保存してブラウザを閉じても値を残します
  const date = new Date();
  const remainingSeconds = 60000 - date.getSeconds() * 1000;
  setAlermTime(
    document.querySelector("input[name='time']").value,
    remainingSeconds
  );
});

//アラームを鳴らすかチェック
var time_confirmation = function (decideTime, remainingSeconds) {
  var time_confirm = setInterval(() => {
    const NowDisplayTime = getDisplayTime();
    if (decideTime === NowDisplayTime) {
      var res = confirm("時間だよ\nスヌーズしますか？");
      if (res) {
        const date = new Date();
        const DisplayTimeHH = toDoubleDigits(date.getHours());
        const DisplayTimeMM = toDoubleDigits(date.getMinutes() + 2);
        clearInterval(time_confirm);
        setAlermTime(DisplayTimeHH + ":" + DisplayTimeMM, 60000);
      } else {
        //アラーム終了
        clearInterval(time_confirm);
        localStorage.clear("decideTime");
      }
    }
  }, remainingSeconds);
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

//スヌーズを利用した時に5分後にアラームが表示されるようにする
function setAlermTime(setTime, remainingSeconds) {
  console.log(remainingSeconds);
  localStorage.setItem("decideTime", setTime);
  //アラームをかける時間を取得
  let decideTime = localStorage.getItem("decideTime");
  set = setInterval(time_confirmation(decideTime), remainingSeconds);
}
