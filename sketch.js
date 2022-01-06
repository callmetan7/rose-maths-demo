let k;
let Nslider;
let Dslider;
function setup() {
	createCanvas(windowWidth, 500);
	Nslider = createSlider(4, 100, 4, 0.01);
	Dslider = createSlider(4, 100, 4, 0.01);
}
function draw() {
	k = Nslider.value() / Dslider.value();
	background(51);
	translate(width / 2, height / 2);
	beginShape();
	noFill();
	for (var a = 0; a < TWO_PI * Dslider.value(); a += 0.02) {
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		stroke(255);
		vertex(x, y);
	}
	endShape();
}
