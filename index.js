
function grid(w, h, nw, nh, margin){
    var max =  nw * nh;
    var cw = Math.floor(w / nw);
    var ch = Math.floor(h / nh);
    var cells = [];
    for(var y = 0; y < nh; ++y){
        for(var x = 0; x < nw; ++x){
            cells.push([
                x * cw + margin,
                y * ch + margin,
                cw - 2 * margin,
                ch - 2 * margin
            ]);
            if(cells.length >= max){
                return cells;
            }
        }
    }
}
