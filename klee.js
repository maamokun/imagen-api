const fs = require('fs');
const path = require('path');
const { Canvas, Image, FontLibrary } = require('skia-canvas');

module.exports = async (query) => {
  const width = 2560;
  const height = 1440;
  const canvas1 = new Canvas(width, height);
  const ctx = canvas1.getContext('2d');
  let img = new Image()
  img.onload = function(){
    ctx.drawImage(img, 100, 100)
  }
  img.src = (path.join(__dirname, 'assets', 'klee.png'));

  FontLibrary.use("SDK_JP_Web", path.join(__dirname, 'assets', 'genshin.ttf'));

  ctx.drawImage(img, 0, 0, width, height);
  ctx.font = '35px SDK_JP_Web';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.textAlign = 'center';
  ctx.fillText(query.query, 1280, 1180);

  const buffer = canvas1.toBuffer('image/png');
  return buffer;
}
