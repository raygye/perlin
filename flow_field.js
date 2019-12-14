var inc = 0.01;
var scl = 40;
var cols, rows;
function setup(){
    createCanvas(400, 400);
    cols = floor(width/scl);
    rows = floor(height/scl);
    pixelDensity(1);
}
function draw(){
    var yoff = 0;
    loadPixels();
    for (var y = 0; y<height; y++){
        var xoff = 0;
        for (var x = 0; x<width; x++){
            var index = (x + y * width)*4;
            var r = noise(xoff, yoff)*255;
            pixels[index] = r;
            pixels[index+1] = r;
            pixels[index+2] = r;
            pixels[index+3] = 255;
            xoff+=inc;
        }
        yoff+=inc;
    }
    updatePixels();
}