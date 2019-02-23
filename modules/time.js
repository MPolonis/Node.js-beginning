var os = require('os');

function time(uptime) {
    var sek = uptime;
    var min = (uptime / 60).toFixed(0);
    var hour = (uptime / 3600).toFixed(0);
    return sek + ' sec., ' + min + ' min., ' + hour + ' h., ';
}

exports.print = time;