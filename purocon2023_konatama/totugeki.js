//変数宣言
var bscene = 0;
var sscene = 0;
var gold   = 0;
var sozai  = 0;
var lvl    = 0;
var carx   = 0;
var carxp  = 0;
//960,850
//開始時
function setup() {
  canvasSize(1920, 1080);
  lineW(3);
  loadImg(0, "image/VRChat_2023-11-25_20-04-28.591_1920x1080.png");
  loadSound(0, "");
  setFPS(60)
}

function mainloop() {
  drawImg(0, 0, 0);
  setAlp(50);
  fRect(450,800,1000,150,"black");





}