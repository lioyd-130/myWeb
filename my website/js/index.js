window.onload = function () {
    var xgs = document.getElementById("xgs");
    var bg = document.getElementById("bg");

    xgs.onmouseover = function () {
        xgs.style.backgroundImage = "url('xgs/xgsfg.png')";
        move(xgs, 900, 1);
    }

    xgs.onmouseout = function () {
        xgs.style.backgroundImage = "url('xgs/xgs.png')";
        move(xgs, 200, 1);
    }

    bg.onclick = function () {
        xgs.style.backgroundImage = "url('xgs/xgsdd.png')";
        move(xgs, -500, 1);
    }

    bg.onmouseout = function () {
        xgs.style.backgroundImage = "url('xgs/xgs.png')";
        move(xgs, 200, 1);
    }
}

var timer;
function move(obj, target, speed) {
    clearInterval(timer);
    var xq = parseInt(getStyle(obj, "left"));
    if (xq > target) {
        speed = -speed;
    }

    timer = setInterval(function () {
        var x = parseInt(getStyle(obj, "left"));
        var g = x + speed;

        if (speed < 0 && g < target || speed > 0 && g > target) {
            g = target;
        }

        obj.style.left = g + "px";

        if (g == target) {
            clearInterval(timer)
            xgs.style.backgroundImage = "url('xgs/xgs.png')";
        }
    }, 5);
}

function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    }
}