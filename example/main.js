var Window          = require('pex-sys/Window');
var grid            = require('../index');

Window.create({
    settings: {
        width:  1024,
        height: 512,
        type: '2d'
    },
    init: function() {
        var ctx = this.getContext();
        var W = this.getWidth();
        var H = this.getHeight();

        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(0, 0, W, H);

        var cells = grid(W, H, 4, 2, 10);
        ctx.strokeStyle = '#000000';
        cells.forEach(function(cell) {
            ctx.strokeRect(cell[0], cell[1], cell[2], cell[3]);
        });
        console.log(cells[0]);
    },
    draw: function() {
    }
})
