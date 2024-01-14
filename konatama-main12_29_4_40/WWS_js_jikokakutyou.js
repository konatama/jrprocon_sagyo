function drawImgSLR(n,x,y,w,h) {//反転拡大縮小
	if(img_loaded[n] == true) {
		var ww = img[n].width;
		var hh = img[n].height;
		bg.save();
		bg.translate(x+ww/2, y+hh/2);
		bg.scale(-1, 1);
		bg.drawImage(img[n], -ww/2, -hh/2,w,h);
		bg.restore();
	}
}
function drawImgSR(n, x, y, w, h, ang) {//回転拡大縮小
	if(img_loaded[n] == true) {
		var wx = img[n].width;
		var hx = img[n].height;
		bg.save();
		bg.translate(x, y);
		bg.rotate(Math.PI*ang/180);
		bg.drawImage(img[n], -wx/2, -hx/2,w,h);
		bg.restore();
	}
}
function drawImgRC(n, x, y, ang) {//回転せんだりんぐ
	if(img_loaded[n] == true) {
		var w = img[n].width;
		var h = img[n].height;
		bg.save();
		bg.translate(x, y);
		bg.rotate(Math.PI*ang/180);
		bg.drawImage(img[n], (-w/2)-int(img[n].width/2), (-h/2)-int(img[n].height/2));
		bg.restore();
	}
}