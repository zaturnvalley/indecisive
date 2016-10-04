var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = 400;
var h = canvas.height = 400;
var y = h / 2;
var x = w / 2;

function random(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawCircle(width, color, stroke, outline) {
  ctx.beginPath();
  ctx.shadowColor = 'rgba(255,255,255,0.2)';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = outline;
  ctx.arc(x, y, width, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowOffsetX = outline;
  ctx.shadowOffsetY = outline;
  ctx.stroke();
}

function drawSprinkles(shape, size) {
  if (size === 'tiny') {
    var num = 800;
    var size = [1, 2];
  } else {
    var num = random(20, 60);
    var size = [2, 5];
  }

  ctx.shadowColor = 'rgba(0,0,0,0.1)';
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  for (var i = 0; i < num; i++) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'hsl(' + random(360) + ',65%,75%)';
    ctx.translate(x, y);
    ctx.rotate((Math.PI / 180) * random(360));
    ctx.translate(-x, -y);
    if (shape === 'rect') {
      ctx.fillRect(random(y - 48, y + 48), random(x - 48, x + 48), random(2, 4), random(8, 12));
    } else {
      ctx.arc(random(y - 48, y + 48), random(x - 48, x + 48), random(size[0], size[1]), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

}

function drawGlaze(width, color, lines) {
  var zig = x;
  var zag = y;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.save();
  ctx.globalCompositeOperation = 'source-atop';
  ctx.globalAlpha = 0.8;

  ctx.shadowColor = 'rgba(0,0,0,0.1)';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;

  ctx.translate(78, -78);
  ctx.rotate((Math.PI / 180) * 30);
  ctx.translate(130, -90);
  ctx.moveTo(x, y);
  for (var i = 0; i < lines; i++) {
    zag += 15;
    if (i % 2 === 0) {
      zig = 50;
    } else {
      zig = x - 20;
    }
    ctx.lineTo(zig, zag);
  }
  ctx.stroke();
  ctx.restore()
}

function init() {
  var hue = random(360);
  var sat = 85;
  var light = random(30, 90);

  function draw() {
    document.getElementById('donutBox').style.background = 'hsl(' + (hue + 145) + ',' + sat + '%,' + (light + 20) + '%)';
    ctx.clearRect(0,0,w,h);

    drawCircle(156 / 2, '#edbd8a', '#e29f63', 3);
    
    drawCircle(65, 'hsl(' + hue + ',' + sat + '%,' + light + '%)', 'hsl(' + hue + ',' + sat + '%,' + (light - 10) + '%)', 4);

    drawCircle(24, '#edbd8a', 'hsl(' + hue + ',' + sat + '%,' + (light - 10) + '%)', 4);
    if (random(0, 1)) {
      drawGlaze(4, '#fff', 10);
    }

    if (random(0, 1)) {
      var spkSize = random(0, 1) ? 'tiny' : 'big';

      drawSprinkles('circle', spkSize);
    }

    drawCircle(18, 'hsl(' + (hue + 145) + ',' + sat + '%,' + (light + 20) + '%)', '#e29f63', 2);
  }

  draw();

};

init();

window.addEventListener('click', init);