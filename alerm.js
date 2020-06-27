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

