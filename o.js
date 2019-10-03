var str = document.getElementById("text1");
var m = 10;
var s = 10;

function fun() {
    var fun11 = setInterval(() => {
        if (m > 9)
            if (s > 9)
                str.innerHTML = "You Got " + m + " : " + s;
            else
                str.innerHTML = "You Got " + m + " : 0" + s;
        else
            if (s > 9)
                str.innerHTML = "You Got 0" + m + " : " + s;
            else
                str.innerHTML = "You Got 0" + m + " : 0" + s;
        if (m === 00 && s === 00) {
            clearInterval(fun11);
            add();
        }
        if (s === 00) {
            m--;
            s = 60;
        }
        s--;
    }, 1000);

}

function add() {

    str.innerHTML = "Time Out";
}