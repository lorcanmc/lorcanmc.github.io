var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");




function drawHouse() {
    strokeWeight(1);
    background(219, 255, 255);

    noStroke();
    
    fill(227, 172, 32);
    triangle(200, 28, 350, 150, 50, 150);

    fill(250, 242, 250);
    rect(60, 150, 280, 200);
    
    fill(230, 145, 25);
    stroke(0, 0, 0);
    
    for( var brick1 = 60; brick1 < 325; brick1 += 20) {
        for ( var brick2 = 150; brick2 <344; brick2 += 10) {
            rect(brick1, brick2, 20, 10);
        }
    }
    
    for( var brick1 = 70; brick1 < 325; brick1 += 20) {
        for ( var brick2 = 160; brick2 <344; brick2 += 20) {
            rect(brick1, brick2, 20, 10);
        }
    }
    
    stroke(0, 0, 0);
    fill(247, 151, 151);
    rect(180, 280, 40, 70);
    rect(186, 284, 28, 17);
    rect(188, 317, 21, 4);
    
    fill(0, 0, 0);
    rect(196, 288, 4, 8);
    rect(202, 288, 4, 8);
    ellipse( 214, 310, 5, 5);
    
    for(var i = 80; i <= 300; i += 50) {
        
        
        for(var j = 169; j < 322; j += 60) {
            if(j < 276 | i < 161 | i > 202) {
                fill(255, 255, 255);
                var wHeight = 39;
                rect( i, j, wHeight, wHeight);
                
                stroke(0, 0, 0);
                fill(184, 184, 184);
                var offset = 3;
                rect( i + offset, j + offset,  wHeight / 2 - offset * 2, wHeight - 2 * offset);
                rect( i + wHeight / 2 + offset / 2, j + offset, wHeight / 2 - offset * 2, (wHeight - 2 * offset)/3);
                rect( i + wHeight / 2 + offset / 2, j + offset + (wHeight / 3) + 2, wHeight / 2 - offset * 2, (wHeight - 2 * offset) * (5 / 9));
            }
        }
    }
}



function drawGrass() {
    strokeWeight(3);
for( var t = 0; t < 400; t += 1) {
    var x = random(-7, 7);
    var y = random(-10,10);
    stroke(62, 150 + x * 3, 12);
    line (t, 351, y + t, 334 + x);
}
for( var t = 0; t < 400; t += 1) {
    var x = random(-7, 7);
    var y = random(-10,10);
    stroke(62, 150 + x * 3, 12);
    line (t, 361, y + t, 344 + x);
}
for( var t = 0; t < 400; t += 1) {
    var x = random(-7, 7);
    var y = random(-10,10);
    stroke(62, 150 + x * 3, 12);
    line (t, 371, y + t, 354 + x);
}
for( var t = 0; t < 400; t += 1) {
    var x = random(-7, 7);
    var y = random(-10,10);
    stroke(62, 150 + x * 3, 12);
    line (t, 381, y + t, 364 + x);
}
for( var t = 0; t < 400; t += 1) {
    var x = random(-7, 7);
    var y = random(-10,10);
    stroke(62, 150 + x * 3, 12);
    line (t, 391, y + t, 374 + x);
}
}

function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function drawTotal() {
    while(true) {
        background(0, 0, 0);
        drawHouse();
        drawGrass();
        sleep(200);
    }
};

c.beginPath();
c.fillStyle = lightBlue;
c.rect(300, 400, 100, 100);
c.closePath();
