function grid (w, h, nw, nh, margin) {
  margin = margin || 0
  var cw = (w - margin - margin * nw) / nw
  var ch = (h - margin - margin * nh) / nh
  var cells = []
  for (var y = 0; y < nh; ++y) {
    for (var x = 0; x < nw; ++x) {
      cells.push([
        x * cw + (x + 1) * margin,
        y * ch + (y + 1) * margin,
        cw,
        ch
      ])
    }
  }
  return cells
}

module.exports = grid
