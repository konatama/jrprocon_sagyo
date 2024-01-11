//変数宣言//> Enable Zenkaku//作業BGM？https://youtu.be/uu3Y54tNT7I?list=PLLdntZbjzvYspkO43FMslvisezxiEo0Yg&t=1715//https://youtu.be/uu3Y54tNT7I?list=PLLdntZbjzvYspkO43FMslvisezxiEo0Yg&t=2247//https://youtu.be/uu3Y54tNT7I?list=PLLdntZbjzvYspkO43FMslvisezxiEo0Yg&t=2729//https://youtu.be/uu3Y54tNT7I?list=PLLdntZbjzvYspkO43FMslvisezxiEo0Yg&t=3847
var bscene = 0; //シーン切り替え
var sscene = 0; //小ウィンドウ※
var sozai  = 0; //素材※
var lvl    = 0; //レベル※
var coin = 0;   //コイン
var stage = 1;  //ステージ
var size = 90;  //1マスのサイズ
var card = 1;   //選択中のカード
var bgX = 0;    //スライド背景の開始位置
var tmr = 0;    //攻撃速度計算用何フレーム経過したか
var ksk = 1;    //倍速ボタン
ido_x = 20;     //荷台移動
var iti = 1;    //位置判定
ido_x_teki = 20;//荷台移動
var iti_teki = 1;//敵位置判定
//console.log(iti);
var timehyouji = 1;
var time = 0;
var ikkai = 0;
var sikaku_hojo = 0;
var sougou_hp = 0;
var sougou_hp_teki = 0;
var kekka = 3;
//※提出までに間に合わないかも


//定数
var SYOKI_X = 1;            //対戦画面の┬自陣x
var SYOKI_Y = 550;          //         ├自陣y
var SYOKI_X_teki = 1392;    //         ├敵陣x
var SYOKI_Y_teki = 550;     //         └敵陣y
var CARD_MAX = 100;//最大カード配置数
var TAIYA_X = [2,7];//編成画面でのタイヤ位置
var CARD_LIFE = [0,45,100,100,60,20,0,0,0,0,20,50,100];  //カードごとHP
var CARD_SPEED = [0,0,15,50,60,80,0,0,0,0,0,0,0];    //攻撃速度
var CARD_REACH = [0,0,150,350,2000,2000,0,0,0,0,0,0,0];   //リーチ1masu75
var CARD_POWER = [0,0,20,50,10,60,0,0,0,0,0,0,0];       //攻撃力


//配列
var hense = [           //自陣基本編成
    //[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    //[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,0,0,0,0,0,0,0,0,-1],
    [-1,0,0,0,0,0,0,0,0,-1],
    [-1,0,0,0,0,0,0,0,0,-1],
    [-1,0,0,0,0,0,0,0,0,-1],
    [-1,1,1,1,1,1,1,1,1,-1],
    [-1,0,20,0,0,0,0,20,0,-1],//FIXME.行列反転してるからあとで治す
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
];
var sl_life = [         //自陣基本HP
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var sl_life_teki = [    //敵陣基本HP
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];


//敵陣編成一覧
var tekihense1 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var tekihense2 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var tekihense3 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var tekihense4 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var tekihense5 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var tekihense6 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];


//開始時
function setup() {
    image_load();           //画像読み込み
    sound_load();           //効果音読み込み
    //基本設定
    canvasSize(1920, 1080); //画面サイズ
    setFPS(30);             //フレーム数
    getDate();              //結局計算してて使ってない
}


//毎FPS
function mainloop() {

    //タイトル画面
    if(bscene == 0) {
        title_G();      //タイトル画面表示
        start_btn();    //スタートボタン
    }

    //ホーム画面
    if(bscene == 1) {
        home_G();       //ホーム画面表示
        //homehense();    //編成表示
        totugeki_btn(); //突撃ボタン
        buck_btn(0);    //戻るボタン
    }

    //マップ画面
    if(bscene == 2) {
        map_G();        //マップ画面表示
        map_btn();      //マップ画面ボタン
        buck_btn(1);    //戻るボタン
    }
    
    //VS画面
    if(bscene == 3) {
        vs_G();         //VS画面表示
        vs_btn();       //VSボタン
        hense_btn();    //編成ボタン
        buck_btn(2);    //戻るボタン
    }

    //編成画面
    if(bscene == 4) {
        hense_G();      //編成画面表示
        sel_card();     //カード選択(勇者選択,枠|ブロック選択,枠)
        haiti_card();   //カード配置(勇者配置,削除|ブロック配置,削除)
        hense_hyouji(); //編成表示(方眼表示,勇者表示,タイヤ表示)
        kinou();        //便利機能(全消し,カーソル合わせで説明文(or/////////セリフ)////////////時間あったら敵確認ヒント)
        buck_btn(3)     //戻るボタン
        //console.log();
    }

    //対戦画面
    if(bscene == 5) {
        taisen_G();     //対戦画面の表示
        taisen_hense(); //攻撃,移動処理
        nidai_hp();     //荷台HPの処理
        ksk_btn();      //倍速ボタン
        buck_btn(3);    //戻るボタン
        timer_modki();  //時間制限
        setumei_kinou();//カーソル合わせで説明文
        //console.log();
    }

    //結果画面
    if(bscene == 6) {
        result();
    }
mouse_pointer();        //マウスポインター(視覚補助)

}


//タイトル画面
function title_G() {        //タイトル画面表示
    drawImg(0, 0, 0);
    setAlp(15);
    fRect(0,0,1920,1080,"white");
    setAlp(100);
    fRect(460,800,1000,150,"lightskyblue");
    drawImgS(1,460,800,1000,150);
}
function start_btn() {      //スタートボタン
    if(tapC == 1 && tapX >= 460 && tapX <= 1460 && tapY >= 800 && tapY <= 950 ) {
        tapC = 0;
        bscene = 1;
    }
}


//ホーム画面
function home_G() {         //ホーム画面表示
    setFPS(30);
    setAlp(100);
    drawBG(0.5);
    setAlp(50);
    fRect(1360,40,500,100,"black");
    setAlp(100);
    fText(coin, 1500, 90, 90, "white");
    drawImg(12,1200,-60);
    setAlp(50);
    fRect(1200,800,650,230,"white");
    setAlp(100);
    fText("突撃!", 1515, 900, 200, "cyan");
}
function homehense() {      //編成表示
    size = 60;
    setAlp(100);
    for(var y=0; y<10; y++) {
        for(var x=0; x<15; x++) {
            var cx = x*size+5
            var cy = y*size+400;
            var c = hense[y][x];
            if(c > 0) {
                if(c == 1) {
                    fRect(cx,cy,size+1,size-2,"#8b4513");
                } else if(c == 2) {
                    drawImgS(71,cx-20,cy-35,size+40,size+40);
                } else if(c == 3) {
                    drawImgS(80,cx-20,cy-35,size+40,size+40);
                } else if(c == 4) {
                    drawImgS(81,cx-20,cy-35,size+40,size+40);
                } else if(c == 5) {
                    drawImgS(91,cx-20,cy-35,size+40,size+40);
                } else if(c == 10) {
                    drawImgS(61,cx,cy,size,size);
                } else if(c == 11) {
                    drawImgS(63,cx,cy,size,size);
                } else if(c == 12) {
                    drawImgS(65,cx,cy,size,size);
                } else if(c == 20) {
                    fCir(cx,cy,30,"black");
                }
            }
        }
    }
}
function totugeki_btn() {   //突撃ボタン
    if(tapC == 1 && tapX >= 1200 && tapX <= 1850 && tapY >= 800 && tapY <= 1030 ) {
        tapC = 0;
        bscene = 2;
    }
}


//マップ画面
function map_G() {          //マップ画面表示
    ksk=1;
    setFPS(30);
    drawBG2(1);
    lineW(100);
    setAlp(50);
        //ボタン表示
    fRect(0,850,600,105,"white");
    fRect(600,455,105,500,"white");
    fRect(705,455,400,105,"white");
    fRect(1105,455,105,350,"white");
    fRect(1210,700,400,105,"white");
    setAlp(100);
    sCir(250,902,3,"#00ccff");
    setAlp(15);
    sCir(650,902,3,"blue");
    sCir(655,510,3,"blue");
    sCir(1155,510,3,"blue");
    sCir(1160,750,3,"blue");
    setAlp(100);
    sCir(1555,752,3,"#ffff00");
    fText("1", 250, 902, 100, "black");//1
    fText("2", 650, 902, 100, "black");//2
    fText("3", 655, 510, 100, "black");//3
    fText("4", 1155, 510, 100, "black");//4
    fText("5", 1160, 750, 100, "black");//5
    fText("6", 1555, 752, 100, "black");//6
}
function map_btn() {        //マップ画面ボタン
    //1st
    if(tapC == 1 && tapX >= 197 && tapX <=300 && tapY >= 852 && tapY <= 955 ) {
        tapC = 0;
        stage = 1;
        bscene = 3;
        //return stage;
      }
    //2st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 852 && tapY <= 955 ) {
        tapC = 0;
        stage = 2;
        bscene = 3;
        //return stage;
    }
    //3st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 460 && tapY <= 563 ) {
        tapC =0;
        stage = 3;
        bscene = 3;
        //return stage;
    }
    //4st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 460 && tapY <= 563 ) {
        tapC = 0;
        stage = 4;
        bscene = 3;
       // return stage;
    }
    //5st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 700 && tapY <= 800 ) {
        tapC = 0;
        stage = 5;
        bscene = 3;
        //return stage;
    }
    //6st
    if(tapC == 1 && tapX >= 1500 && tapX <= 1600 && tapY >= 700 && tapY <= 800 ) {
        tapC = 0;
        stage = 6;
        bscene = 3;
        //return stage;
        //console.log(stage);
    }
}


//VS画面
function vs_G() {           //VS画面表示
    sl_life_teki = [    //敵陣基本HP
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
    ];
    var ikkai = 0;
    ksk =1;
    iti = 1;
    iti_teki = 1;
    time = 0;
    setFPS(30);
    fRect(0,0,1920,1080,"#14ff89");
    setAlp(100);
    drawImgS(30,489,20,942,888);
    fRect(489,908,942,888,/*"#00bfff"*/"red");
    lineW(20);
    setAlp(100);
    fText("編成を変える",980,1000,100,"white");
    sRect(489,908,942,888,"white");
    hpset();
}
        function hpset() {  //敵陣 HPセット
            for(var y=0; y<10; y++) {
                for(var x=0; x<15; x++) {
                    //stage = map_btn();
                    //console.log(stage)
                    if(stage == 1) {
                        d = tekihense1[y][x];
                    }
                    if(stage == 2) {
                        d = tekihense2[y][x];
                    }
                    if(stage == 3) {
                        d = tekihense3[y][x];
                    }
                    if(stage == 4) {
                        d = tekihense4[y][x];
                    }
                    if(stage == 5) {
                        d = tekihense5[y][x];
                    }
                    if(stage == 6) {
                        d = tekihense6[y][x];
                    }
                    if(d > 0 /*&& ikkai < 150/*-1*/) {
                        sl_life_teki[y][x] = CARD_LIFE[d];
                        ikkai++;
                    }
                }
            }
        }
function vs_btn() {         //VSボタン
    if(tapC == 1 && tapX >= 489 && tapX <= 1431 && tapY >=20 && tapY <= 908 ) {
      bscene = 5;
      setFPS(30);
    }
}
function hense_btn() {      //編成ボタン
    if(tapC == 1 && tapX >= 489 && tapX <= 1431 && tapY >= 908 && tapY <= 1080) {
        tapC = 0;
        bscene = 4;
    }
}


//編成画面
function hense_G() {        //編成画面表示
    setFPS(30);
    drawImg(40,0,0);
    setAlp(35);
    fill("white");
    setAlp(70);
    fRect(1150.3,0,200,180,"white");
    drawImgS(41,1155,0,200,180);//ゴミ箱
    fRect(1350,0,1920-1350,1080,"black");
    setAlp(100);
    fText("配置物",1630,90,100,"white");
    lineW(3);
    sRect(1351,180,285,185,"red");
    sRect(1635,180,285,185,"red");
    sRect(1351,365,285,185,"red");
    sRect(1635,365,285,185,"red");
    sRect(1351,550,285,185,"red");
    sRect(1635,550,285,185,"red");
    sRect(1351,735,285,185,"red");
    sRect(1635,735,285,185,"red");
    drawImgS(60,1350,920,170,100);//段ボール
    drawImgS(62,1550,920,170,100);//鉄
    drawImgS(64,1730,920,170,100);//ダイヤ
    drawImgS(70,1350,170,170,170);//mokken/kensi
    drawImgS(80,1350,355,170,170);//yari/yumi
    drawImgS(90,1350,540,170,170);//mahou/joukyuumahou
    drawImgS(91,1350,725,170,170);//kaihuku/joukyuukaihuku
}
function sel_card() {       //カード選択
    sel_yusya();
    sel_block();
    sel_yusya_line();
    sel_block_line();
}
        function sel_yusya() {                  //勇者選択
            if(tapC == 1 && tapY >180 && tapY < 735+185 && tapX > 1350 && tapX <1635) {
                tapC = 0;
                var sentakubotan = int(tapY/185);
                if(0<=sentakubotan && sentakubotan<CARD_MAX) card = sentakubotan;
            }
        }
        function sel_block() {                  //ブロック選択
            if(tapC == 1 && tapY > 920 && tapX > 1350) {
            tapC = 0;
            var burokkusenntaku = int(tapX/190);
            if(0<=burokkusenntaku && burokkusenntaku<CARD_MAX) {
                card = burokkusenntaku+3;
            }
        }
        }
        function sel_yusya_line() {             //勇者選択枠
            for(var i=0; i<CARD_MAX; i++){
                var ax = 1350;
                var ay = 183*i;
                lineW(8);
                if(i > 0 && i < 10 &&i == card) sRect(ax,ay,285,185,"cyan");
            }
        }
        function sel_block_line() {             //ブロック選択枠
            for(var i=10; i<CARD_MAX; i++){
                var j = i-9;
                var gx = 190*j;
                var gy = 920;
                lineW(8);
                if(i > 9 && i < 13 && i == card) sRect(gx+1160,gy,200,150,"cyan");
              }
        }
function haiti_card() {     //カード配置(変数準備)
    size = 150;//90;
    var mx = int(tapX/size);
    var my = int(tapY/size);
    mx += 1;
    //my -= 150;
    if(mx >= 0 && mx<9 && 1 <= my && my<7) {
        var b = hense[my][mx];
        console.log(b);
        var h = hense[my+1][mx];
        if(my >= 1) {
            var k = hense[my-1][mx];
        }
        var l = hense[my][mx+1];
        var m = hense[my][mx-1];
        haiti_yusya(b,h,mx,my);
        haiti_block(b,h,k,l,m,mx,my);
        delete_yusya(b,mx,my);
        delete_block(b,mx,my);
    }
}
        function haiti_yusya(b,h,mx,my) {       //勇者配置
            if(tapC == 1) {
                if(b == 0 && card > 0 && card < 5 && (h == 1 || h > 9 && h < 13)) {
                    hense[my][mx] = card+1;
                    sl_life[my][mx] = CARD_LIFE[card+1];
                    tapC = 0;
                }
            }
        }
        function haiti_block(b,h,k,l,m,mx,my) { //ブロック配置
            if(tapC == 1) {
                if(card > 9 && card < 13 && b == 0 && (h == 1 || h > 9 && h < 13 || k > 9 && k < 13 || l > 9 && l < 13 || m > 9 && m < 13 )) {
                    hense[my][mx] = card;
                    sl_life[my][mx] = CARD_LIFE[card];
                    tapC = 0;
                }
            }
        }
        function delete_yusya(b,mx,my) {        //勇者削除
            if(b > 1 && b < 9 && tapC == 1) {//
                hense[my][mx] = 0;
                tapC = 0;
            }
        }
        function delete_block(b,mx,my) {        //ブロック削除
            if(my > 0) {
                if(b > 9 && b < 13 && (hense[my-1][mx] == 0) && tapC == 1) {
                    hense[my][mx] = 0;
                    tapC = 0;
                }
            }
            if(my == 0) {
                if(b > 9 && b < 13 && tapC == 1) {
                    hense[my][mx] = 0;
                    tapC = 0;
                }
            }
        }
function hense_hyouji() {   //編成表示(変数準備)
    for(var y=1; y<7; y++) {
        for(var x=1; x<9; x++) {
            var cx = x*size-150;
            var cy = y*size+180-150;
            var c = hense[y][x];
            //console.log();
            //block_bug_taisaku(x,y);
            taiya_hyoji(cx,cy);
            masu(cx,cy);
            yusya_hyoji(c,cx,cy);
        }
    }
}
        function block_bug_taisaku(x,y,b) {       //ブロック斜め削除浮遊対策
            var l = hense[y][x+1];
            var m = hense[y][x-1];
            var h = hense[y+1][x];
            if(y >= 1) {
                var k = hense[y-1][x];
            }
            if(y > 0) {
                if(b > 9 && b < 13 && l == 0 && m == 0 && h == 0 && k == 0) {
                    hense[y][x] = 0;
                }
            }
            if(y == 0) {
                if(b > 9 && b < 13 && l == 0 && m == 0 && h == 0) {
                    hense[y][x] = 0;
                }
            }
        }
        function yusya_hyoji(c,cx,cy) {         //勇者表示
            if(c > 0) {
                if(c == 1) {
                    /*fRect(cx,cy,size-2,size-2,"#8b4513");
                    lineW(5);
                    sRect(cx,cy,size,size,"brown");*/
                    drawImgS(66,cx,cy,size,size);
                }
                if(c == 2) {
                    drawImg(71,cx-5,cy);
                }
                if(c == 3) {
                    drawImg(80,cx-5,cy);
                }
                if(c == 4) {
                    drawImg(81,cx-5,cy);
                }
                if(c == 5) {
                    drawImg(91,cx-5,cy);
                }
                if(c == 10) {
                    drawImgS(61,cx,cy,size,size);
                }
                if(c == 11) {
                    drawImgS(63,cx,cy,size,size);
                }
                if(c == 12) {
                    drawImgS(65,cx,cy,size,size);
                }
            }
        }
        function masu(cx,cy) {                  //方眼表示
            lineW(3);            
            sRect(cx,cy,size-2,size-2,"white");
        }
        function taiya_hyoji(cx,cy) {           //タイヤ表示
            for(var taiya=0; taiya<2; taiya++) {
                var cx = TAIYA_X[taiya]*size+size/2-150;
                var cy = 6*size+size/2+180-150;
                fCir(cx,cy,45,"black");
            }
        }
function kinou() {          //便利機能
    zenkesi();
    setumei();
}
        function zenkesi() {                    //全消し機能
            if(tapC == 1 && tapX >= 1155 && tapX <=1355 && tapY <=180) {
                hense = [
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
                ];
                sl_life = [
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
                ];
            }
        }
        function setumei() {                    //カーソル合わせで説明文(orセリフ)
            zenkesi_setumei();
        }
                function zenkesi_setumei() {    //全消し機能説明
                    if(tapX >= 1155 && tapX <=1355 && tapY <=180) {
                        setAlp(50);
                        fRect(tapX,tapY,180,60,"white");
                        setAlp(100);
                        lineW(2);
                        sRect(tapX,tapY,180,60,"red");
                        fText("全消し",tapX+90,tapY+30,50,"black");
                    }
                }

                

//対戦画面
function taisen_G() {       //対戦画面表示
    drawBG3(1);
    timer_modki();
}
function taisen_hense() {   //自陣編成表示(変数準備,移動)
    tmr++;
    //console.log(tmr);
    size = 35;
    ido_syori();
    ido_syori_teki();
    for(var y=0; y<6; y++) {
        for(var x=0; x<6; x++) {
            var cx = x*size+SYOKI_X+ido_x;
            var cy = y*size+SYOKI_Y;
            var c = hense[y][x];
            //stage = map_btn();
            //console.log(stage)
            if(stage == 1) {
                d = tekihense1[y][x];
            }
            if(stage == 2) {
                d = tekihense2[y][x];
            }
            if(stage == 3) {
                d = tekihense3[y][x];
            }
            if(stage == 4) {
                d = tekihense4[y][x];
            }
            if(stage == 5) {
                d = tekihense5[y][x];
            }
            if(stage == 6) {
                d = tekihense6[y][x];
            }
            //d = map_btn();
            var dx = x*size+SYOKI_X_teki-ido_x_teki;
            var dy = y*size+SYOKI_Y_teki;
            if(d==5) healer_teki(d,x,y);    //回復士_teki
            if(c==5) healer(c,x,y);     //回復味方
            attack(x,y,cx,cy,c,size,tmr);           //自陣攻撃処理
            attack_teki(x,y,dx,dy,d,size,tmr);      //敵陣攻撃処理
            taisen_hense_hyoji(c,cx,cy,size,x,y);   //自陣表示処理
            teki_hense_hyoji(d,dx,dy,size,x,y);     //敵陣表示処理
            if(y >9&&c >0) {
                sougou_hp++
                if(sougou_hp == 15) []
            }
            if(y>8 &&d == 0) {
                sougou_hp_teki++
            }
            if(sougou_hp >= 120) {
                kekka = 0;
                bscene = 6;
            }
            if(sougou_hp_teki >= 120) {
                kekka = 1;
                bscene = 6;
            }
            if(sougou_hp_teki == 119) {
                sougou_hp_teki =0;
            }
            if(sougou_hp == 119) {
                sougou_hp =0;
            }
        }
    }
}
        function ido_syori() {      //自陣移動処理
            if(iti == 1) {
                ido_x *= 1.02
                if(14*size+ido_x+SYOKI_X+size+1 >= 0*size+SYOKI_X_teki-ido_x_teki+size+1) {
                    playSE(0);
                    iti = 2;
                    iti_teki =2;
                }
            }
            if(iti == 2) {
                if(14*size+ido_x+SYOKI_X+size+1 >= 0*size+SYOKI_X_teki-ido_x_teki+size+1) {
                    playSE(0);
                    iti_teki =2;
                }
                ido_x *=0.98;
                if(ido_x <40) {
                    iti =1;
                }
            }
        }
        function taisen_hense_hyoji(c,cx,cy,size,x,y) {     //自陣編成表示
            if(c > 0 && sl_life[y][x] > 0) {
                if(c == 1) {
                    fRect(cx,cy,size+1,size-2,"#8b4513");
                } else if(c == 2) {
                    drawImgS(71,cx-20,cy-35,size+40,size+40);
                } else if(c == 3) {
                    drawImgS(80,cx-20,cy-35,size+40,size+40);
                } else if(c == 4) {
                    drawImgS(81,cx-20,cy-35,size+40,size+40);
                } else if(c == 5) {
                    drawImgS(91,cx-20,cy-35,size+40,size+40);
                } else if(c == 10) {
                    drawImgS(61,cx,cy,size,size);
                } else if(c == 11) {
                    drawImgS(63,cx,cy,size,size);
                } else if(c == 12) {
                    drawImgS(65,cx,cy,size,size);
                } else if(c == 20) {
                    fCir(cx,cy,20,"black");
                }
                if(c >0 && c != 20) {
                    fText(sl_life[y][x],cx,cy-40,20,"blue");
                }
            }
            if(y<7) {
                if(sl_life[y+1][x] <0) {
                    c=0;
                    sl_life[y][x] = 0;
                }
            }
            if(sl_life[y][x] <= 0) hense[y][x] = 0;
}
        function ido_syori_teki() { //敵陣移動処理
            if(iti_teki == 1) {
                ido_x_teki *= 1.02
            }
            if(iti_teki == 2) {
                ido_x_teki *=0.98;
                if(ido_x_teki <40) {
                    iti_teki =1;
                }
            }
        }
        function teki_hense_hyoji(d,dx,dy,size,x,y) {       //敵陣編成表示
            if(d > 0 && sl_life_teki[y][x] > 0 ||(y==9 && (x == 4||x == 10))) {
                if(d == 1) {
                    fRect(dx,dy,size+1,size-2,"#8b4513");
                } else if(d == 2) {
                    drawImgSLR(71,dx-40,dy-35,size+40,size+40);
                } else if(d == 3) {
                    drawImgSLR(80,dx-40,dy-35,size+40,size+40);
                } else if(d == 4) {
                    drawImgSLR(81,dx-40,dy-35,size+40,size+40);
                } else if(d == 5) {
                    drawImgSLR(91,dx-40,dy-35,size+40,size+40);
                } else if(d == 10) {
                    drawImgS(61,dx,dy,size,size);
                } else if(d == 11) {
                    drawImgS(63,dx,dy,size,size);
                } else if(d == 12) {
                    drawImgS(65,dx,dy,size,size);
                } else if(d == 20) {
                    fCir(dx,dy,20,"black");
                }
                if(d >0 && d != 20) {
                    fText(sl_life_teki[y][x],dx,dy-40,20,"red");
                }
                if(y>7) {
                    if(sl_life_teki[y][x] <0) {
                        d=0;
                        sl_life_teki[y][x] = 0;
                    }
                }
                if(sl_life_teki[y][x] <= 0) d = 0;
            }
        }
        function attack(x,y,cx,cy,c,size,tmr) {             //自陣攻撃処理
            if(c < 9 && c > 1 ) {
                for(var y=0; y<8; y++) {
                    for(var x=0; x<15; x++) {
                        var dx = x*size+SYOKI_X_teki-ido_x_teki;
                        var dy = y*size+SYOKI_Y_teki;
                        //if(getDis(cx,cy,dx,dy) <= CARD_REACH[c] && tmr%(CARD_SPEED[c]/2) == 0) {
                            //if(c==4) {
                                /*drawImgTS(102,0,0,120,120,dx,dy-20,600,360);
                                drawImgTS(102,0,120,120,120,dx,dy-20,120,120);
                                drawImgTS(102,0,240,120,120,dx,dy-20,120,120);
                                drawImgTS(102,0,360,120,120,dx,dy-20,120,120);
                                drawImgTS(102,0,480,120,120,dx,dy-20,120,120);
                                drawImgTS(102,120,0,120,120,dx,dy-20,120,120);
                                drawImgTS(102,120,120,120,120,dx,dy-20,120,120);
                                drawImgTS(102,120,240,120,120,dx,dy-20,120,120);
                                drawImgTS(102,120,360,120,120,dx,dy-20,120,120);
                                drawImgTS(102,120,480,120,120,dx,dy-20,120,120);
                                drawImgTS(102,240,0,120,120,dx,dy-20,120,120);
                                drawImgTS(102,240,120,120,120,dx,dy-20,120,120);
                                drawImgTS(102,240,240,120,120,dx,dy-20,120,120);
                                drawImgTS(102,240,360,120,120,dx,dy-20,120,120);
                                drawImgTS(102,240,480,120,120,dx,dy-20,120,120); */
                           // }
                        //}
                        if(getDis(cx,cy,dx,dy) <= CARD_REACH[c] && tmr%CARD_SPEED[c] == 0) {
                            if(c==2) knight(c,x,y,dx,dy); //剣士
                            if(c==3) lancer(c,x,y)  //槍使い
                            if(c==4) wizard(c,x,y);    //魔法使い
                            //if(c==6) archer(cx,cy);//弓士
                        }
                    }
                }
            }
        }
                function knight(c,x,y,dx,dy) {  //剣士
                    sl_life_teki[y][x]      -= CARD_POWER[c];
                    fRect(dx,dy,5,50,"red");
                }
                function lancer(c,x,y) {        //槍使い
                    sl_life_teki[y][x]      -= CARD_POWER[c];
                    sl_life_teki[y][x+1]    -= CARD_POWER[c];
                    sl_life_teki[y][x+2]    -= CARD_POWER[c];
                }
                function wizard(c,x,y) {         //魔法使い
                    sl_life_teki[y][x]      -= CARD_POWER[c];
                    sl_life_teki[y][x+1]    -= CARD_POWER[c];
                    sl_life_teki[y][x+2]    -= CARD_POWER[c];
                    sl_life_teki[y][x+3]    -= CARD_POWER[c];
                    sl_life_teki[y][x+4]    -= CARD_POWER[c];
                    sl_life_teki[y][x+5]    -= CARD_POWER[c];
                    sl_life_teki[y][x+6]    -= CARD_POWER[c];
                }
                function healer(c,x,y) {             //回復士
                    if(tmr%CARD_SPEED[c] == 0) {
                        if(hense[y][x+1]>1) {
                            sl_life[y][x+1] += 50;
                        }
                        if(hense[y][x+2]>1) {
                            sl_life[y][x+2] += 50;
                        }
                    }
                }
                /*function archer(cx,cy) {         //超遠距離
                    var arrow_max = 0;
                    arrow_max++;
                    var arrow_x = new Array[arrow_max];
                    var arrow_y = new Array[arrow_max];
                    var arrow_ysokudo = new Array[arrow_max];
                    var arrow_ido = new Array[arrow_max];
                    var arrow_life = new Array[arrow_max];
                    for(var i=0; i<arrow_max; i++) {
                        arrow_x[i] = cx;
                        arrow_y[i] = cy;
                        arrow_life[i] = 1;
                        arrow_ido[i] = 10;
                        arrow_ysokudo[i] = 0;
                        if(arrow_life[i] > 0) {
                            if(arrow_ido >= 2) arrow_ysokudo[i] = 0.95;
                            if(arrow_ido < 2) arrow_ysokudo[i] = 1.05;
                            arrow_x[i] +=10;
                            arrow_y[i] +=arrow_ido*arrow_ysokudo;
                            fCir(arrow_x[i],arrow_y[i],50,"red");
                        }
                    }
                }*/
        function attack_teki(x,y,dx,dy,d,size,tmr) {        //敵陣攻撃処理
            if(d < 9 && d > 1 ) {
                for(var y=0; y<8; y++) {
                    for(var x=0; x<15; x++) {
                        var cx = x*size+SYOKI_X+ido_x;
                        var cy = y*size+SYOKI_Y;
                        //var c = hense[y][x];
                        if(getDis(cx,cy,dx,dy) <= CARD_REACH[d] && tmr%CARD_SPEED[d] == 0) {
                            if(d==2) knight_teki(d,x,y); //剣士
                            if(d==3) lancer_teki(d,x,y)  //槍使い
                            if(d==4) wizard_teki(d,x,y);    //魔法使い
                            //if(d==6) archer(cx,cy);//弓士
                        }
                    }
                }
            }
        }
                function knight_teki(d,x,y) {        //剣士
                    sl_life[y][x]      -= CARD_POWER[d];
                    //console,log(sl_life_teki[7][0]);
                }
                function lancer_teki(d,x,y) {        //槍使い
                    sl_life[y][x]      -= CARD_POWER[d];
                    sl_life[y][x-1]    -= CARD_POWER[d];
                    sl_life[y][x-2]    -= CARD_POWER[d];
                }
                function wizard_teki(d,x,y) {        //魔法使い
                    sl_life[y][x]      -= CARD_POWER[d];
                    sl_life[y][x-1]    -= CARD_POWER[d];
                    sl_life[y][x-2]    -= CARD_POWER[d];
                    sl_life[y][x-3]    -= CARD_POWER[d];
                    sl_life[y][x-4]    -= CARD_POWER[d];
                    sl_life[y][x-5]    -= CARD_POWER[d];
                    sl_life[y][x-6]    -= CARD_POWER[d];
                }
                function healer_teki(c,x,y) {             //回復士
                    if(tmr%CARD_SPEED[c] == 0) {
                        if(d>1) {
                            sl_life_teki[y][x+1] += 50;
                        }
                        if(d>1) {
                            sl_life_teki[y][x+2] += 50;
                        }
                    }
                }
function nidai_hp() {

}
function timer_modki() {//時間制限
    time =  (time + 1/60*(ksk/4));
    timehyouji = int(time);
    drawImgS(51,1920/3*2,0,150,150);
    //fText(60 - timehyouji,960,100,100,"white");//文字表示
    if(time >= 120) {
        sleep(300);
        bscene = 6;
        kekka = 0;
        setFPS(30);
    }
}
function ksk_btn() {//倍速ボタン
    lineW(10)
    setAlp(70);
    fCir(1920/2,100,80,"white");
    setAlp(60);
    sCir(1920/2,100,80,"blue");
    setFPS(30*ksk);
    //console.log(FPS);
    ksk_btn_setumei();
    ksk_btn_ugoki();
    //sRect(1920/2-80,20,160,160,"red");
}
        function ksk_btn_ugoki() {  //倍速ボタン機能
            fText("×"+ksk,1920/2,100,100,"#00bfff");
            if(tapX>1920/2-80 && tapY>20 && tapX<1920/2-80+160 && tapY<180 && tapC == 1 && ksk <= 4) {
                ksk +=1;
                tapC = 0;
            }
            if(tapX>1920/2-80 && tapY>20 && tapX<1920/2-80+160 && tapY<180 && tapC == 1 && ksk > 4) {
                ksk = 1;
                tapC = 0;
            }
        }
function setumei_kinou() {//説明機能
    ksk_btn_setumei();
}
        function ksk_btn_setumei() {//倍速ボタン説明
            if(tapX>1920/2-80 && tapY>20 && tapX<1920/2-80+160 && tapY<180) {
                setAlp(70);
                lineW(2);
                fRect(tapX,tapY-40,700,80,"white");
                setAlp(100)
                sRect(tapX,tapY-40,700,80,"red");
                fText("クリックして倍速！",tapX+350,tapY,70,"black")
            }
        }



function result() {//結果画面
    setAlp(4);
    fill("#a6a6a6");
    setAlp(100);
    sRect(200,100,1520,880,"black");
    fRect(200,100,1520,880,"#87cefa");
    if(kekka == 1) {//win
        
    }
    if(kekka == 0) {//lose
    }
}


function mouse_pointer() {          //視覚補助
    if(sikaku_hojo == 1) {
        lineW(10);
        if(tapC == 0) {
            sCir(tapX,tapY+10,30,"blue");
        }
        if(tapC == 1) {
            fCir(tapX,tapY+10,20,"blue");
        }
    }
}

//読み込み
function image_load() {     //画像ロード
    //タイトル画面
    loadImg(0, "image/title_g.jpg"   );
    loadImg(1, "image/start_btn.png" );

    //ホーム画面
    loadImg(10, "image/home_g.jpg"    );
    loadImg(11, "image/coin_icon.png" );
    loadImg(12, "image/coin_icon.png" );

    //マップ画面
    loadImg(20, "image/map_g.png" );

    //準備画面
    loadImg(30, "image/junbi.png" );

    //編成画面
    loadImg(40, "image/hense_g.jpg"    );
    loadImg(41, "image/all_delete.png" );

    //VS画面
    loadImg(50, "image/vs_g.jpg" );
    loadImg(51, "image/tunobue.png");
    //loadImg(52,"image/kengeki.png")


        //ブロック※時間あったら動く足場
    //荷台台座
    loadImg(66, "image/daiza.png");
    //段ボール
    loadImg(60, "image/danball_icon.png");
    loadImg(61, "image/danball_hens.jpg");
    //鉄
    loadImg(62, "image/tetu_icon.png");
    loadImg(63, "image/tetu_hens.jpg");
    //ダイヤ
    loadImg(64, "image/dia_icon.png");
    loadImg(65, "image/dia_hens.jpg");
    
        //勇者｜現在属性[剣士,槍士,槍士,回復士]
    //剣
    loadImg(70, "image/mokken.png"  );
    loadImg(71, "image/tetuken.png" );
    //超遠距離
    loadImg(80, "image/yari.png"    );
    loadImg(81, "image/mahou.png"   );
    //回復
    loadImg(90, "image/souryo.png"  );
    loadImg(91, "image/sinkan.png"  );
    //魔法┐
    //爆弾├提出までに間に合わないかも
    //大工┘

        //攻撃エフェクト
    //loadImg(102, "image/mahou_ef.png");
}
function sound_load() {     //効果音ロード
        //対戦画面
    loadSound(0, "sound/syoutotu.mp3");     //荷台衝突音
    loadSound()
}


//スライド背景
function drawBG(spd) {      //ホーム背景
    bgX = (bgX + spd)%1920;
    drawImg(10, -bgX, 0);
    drawImg(10, 1920-bgX, 0);
}
function drawBG2(spd) {     //マップ背景
    bgX = (bgX + spd)%1920;
    drawImg(20, -bgX, 0);
    drawImg(20, 1920-bgX, 0);
}
function drawBG3(spd) {     //戦闘背景
  bgX = (bgX + spd)%1920;
  drawImg(50, -bgX, 0);
  drawImg(50, 1920-bgX, 0);
}


//戻るボタン
function buck_btn(scene) {      //本体
    buck_btn_hyouji();
    buck_btn_hantei(scene);
}
function buck_btn_hyouji() {    //戻るボタン表示
    setAlp(60);
    fRect(0,0,400,90,"black");
    setAlp(100);
    fText("←戻る",200,45,80,"white");
}
function buck_btn_hantei(scene) {//戻るボタン判定
    if(tapC == 1 && tapX <= 400 && tapY <= 90) {
        bscene = scene;
        tapC = 0;
        setFPS(30);
        sleep(100);
    }
}


//ビジーwait
function sleep(waitMsec) {    //空回りさせて待つ
    var startMsec = new Date();
    // 指定ミリ秒間だけループさせる
    while (new Date() - startMsec < waitMsec);
}
/*
var canvas = document.getElementById("canvas"); //半円を描くcanvas
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(250,250,100,(Math.PI/180)*180,(Math.PI/180)*0);
  ctx.stroke();        
}
*/