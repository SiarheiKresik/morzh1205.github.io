import resources from "./resources.js";
export default class Sprite {
  constructor(url, pos, size, speed, frames, dir, once) {
    this.pos = pos;
    this.size = size;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this._index = 0;
    this.url = url;
    this.dir = dir || 'horizontal';
    this.once = once;
  }
  update(dt) {
      this._index += this.speed*dt;
  }
  render(ctx, x0 = 0, y0 = 0) {

      let frame;

      if(this.speed > 0) {
          let max = this.frames.length;
          let idx = Math.floor(this._index);
          frame = this.frames[idx % max];

          if(this.once && idx >= max) {
              this.done = true;
              return;
          }
      }
      else {
          frame = 0;
      }

      let x = this.pos[0];
      let y = this.pos[1];

      if(this.dir == 'vertical') {
          y += frame * this.size[1];
      }
      else {
          x += frame * this.size[0];
      }

      ctx.drawImage(resources.get(this.url),
                    x, y,
                    this.size[0], this.size[1],
                    x0, y0,
                    this.size[0], this.size[1]);
  }
}
