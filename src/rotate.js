/* reference
 *
 * https://www.gamefromscratch.com/post/2012/11/24/GameDev-math-recipes-Rotating-one-point-around-another-point.aspx
 *
 */

/**
 * rotatePoint
 *
 * @param a- point to rotate
 * @param b - center
 * @param c - angle
 * @returns {Array}
 */
function rotatePoint(a, b, c) {
  c *= Math.PI / 180;
  var d = Math.cos(c) * (a.x - b.x) - Math.sin(c) * (a.y - b.y) + b.x;
  var e = Math.sin(c) * (a.x - b.x) + Math.cos(c) * (a.y - b.y) + b.y;
  return [d, e];
}

module.exports = {
  rotatePoint
};
