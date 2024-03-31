function helloworld() {
    var target = 10;
    var wrong = false;
    var tishi_2 = "还没有提示啊笨蛋！！！"
    if (target != document.getElementById("input_number").value) {
        document.getElementById("output").innerHTML = "...";
        document.getElementById("output").style.color = "red";
        setTimeout(() => {document.getElementById("output").innerHTML = "哎呀呀，错了呢，继续猜吧:("}, 1000);
        var wrong = true;
    } else {
        document.getElementById("output").innerHTML = "...";
        document.getElementById("output").style.color = "green";
        setTimeout(() => {document.getElementById("output").innerHTML = "你真厉害！猜对了:)"}, 1000);
    }
    if (wrong){
        if (document.getElementById("input_number").value > target) {
            document.getElementById("tishi_2").innerHTML = "太大了，猜小一点";
        } else {
            document.getElementById("tishi_2").innerHTML = "太小了，猜大一点";
        }
    } else {
        document.getElementById("tishi_2").innerHTML = "你都对了看什么提示啊(雾";
    }
}

function show() {
    if (document.getElementById("tishi_2").innerHTML != "") {
        document.getElementById("tishi").innerHTML = "&nbsp提示：" + document.getElementById("tishi_2").innerHTML;
    } else {
        var tishi_2 = "还没有提示啊笨蛋！！！";
        document.getElementById("tishi_2").innerHTML = tishi_2;
        document.getElementById("tishi").innerHTML = "&nbsp提示：" + tishi_2;
    }
}