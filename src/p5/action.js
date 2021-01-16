import p5 from 'p5';

export default function _p5(node, workspace) {
  new p5(
    (instance) => (workspace ? workspace(instance) : fallback(instance)),
    node
  );
}

/**
 * The main method
 *
 * @param {p5} p5 sketch instance, scoped where many may exist on the same page
 */
const fallback = (p5) => {
  let x = 0;
  let y = 0;
  let size = 10;
  let threshold = 0;

  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.stroke(0);
    threshold = p5.random(1);

    if (threshold < 0.1) p5.line(x, y, x + size, y + size);
    else if (0.505 > threshold > 0.5) p5.line(x, y, x, y + size);
    else p5.line(x, y + size, x + size, y);

    x = x + size;
    if (x > p5.width) {
      x = 0;
      y = y + size;
    }
  };
};
