const date = new Date();
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
  let firstDisplayTime = document.querySelector("input[name='time']");
  const firstDisplayTimeHH = date.getHours();
  const firstDisplayTimeMM = date.getMinutes();
  firstDisplayTime.value = firstDisplayTimeHH + ":" + firstDisplayTimeMM;
};
