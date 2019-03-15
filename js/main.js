var iname = document.getElementById('name');
var mail = document.getElementById('mail');
var pass = document.getElementById('pass');
var tr = document.getElementById('tr');
console.log(tr);

function sub() {
    var c = tr.parentNode;
    var b = [];
    var x = [];
    var a = document.createElement('tr');
    c.appendChild(a);
    for (i = 0; i < 3; i++) {
        x[0] = document.forms["myForm"]["fname"].value;
        x[1] = document.forms["myForm"]["fname1"].value;
        x[2] = document.forms["myForm"]["fname2"].value;
        if (x[i] == "") {
            alert("Name must be filled out");
            return false;
        }
    }
    for (i = 0; i < 5; i++) {
        b[i] =
            document.createElement('td');
        a.appendChild(b[i]);
        console.log(b[i]);
    }
    b[0].innerHTML = iname.value;
    b[1].innerHTML = mail.value;
    b[2].innerHTML = pass.value;
    b[3].innerHTML = '<button type="button" class="btn btn-light submit-btn" onclick="pop(this)"id="submitbtn">Update</button>';
    b[4].innerHTML = '<button type="button" class="btn btn-light submit-btn"onclick="deletet(this)">Delete</button>';
}

var innerlog = document.getElementsByClassName('innerform')[0];
var logmain = document.getElementsByClassName('logmain')[0];

function login() {
    console.log(b);
    logmain.style.opacity = "1";
    logmain.style.zIndex = "1";
    logmain.style.transition = ".3s all";
    innerlog.style.transition = ".3s all";
    logmain.style.height = "100%";
    innerlog.style.opacity = "1";
    innerlog.style.top = "50%";
    innerlog.style.zIndex = "1";
    //    window.location.href = "main.html";
}

function logininner() {
    var logname = document.getElementById('logname').value;
    var tdi = document.getElementsByTagName('td');
    for (i = 0; i < tdi.length; i++) {
        if (tdi[i].innerHTML == logname) {
            var windowmain = window.location.href = "main.html";
            console.log(windowmain);
            var logtd = document.getElementById('maintr');
            console.log(logtd);
        }
    }
}
//
//function validateForm() {
//

//function mainpage(){
//    alert('helo');
//}

function deletet(del) {
    var delmain = del.parentNode.parentNode;
    console.log(delmain);
    delmain.innerHTML = "";
}
var a = document.getElementsByClassName('main')[0];
var b = document.getElementsByClassName('form')[0];
var c = document.getElementsByClassName('p')[0];
console.log(c);

var m = document.getElementsByClassName('main1')[0];
var mi = document.getElementsByClassName('mainContent')[0];

function msg() {
    a.style.opacity = "0";
    a.style.zIndex = "-2";
    a.style.transition = ".3s all";
    b.style.transition = ".3s all";
    a.style.height = "0";
    b.style.opacity = "0";
    b.style.top = "35%";
    b.style.zIndex = "-1";

    m.style.opacity = "2";
    m.style.zIndex = "1";
    m.style.transition = ".3s all";
    mi.style.transition = ".3s all";
    m.style.height = "100%";
    mi.style.opacity = "2";
    mi.style.top = "50px";
    mi.style.zIndex = "1";

    //        var name1 = document.getElementById('name1').value;
    //        console.log(name1);
    //        var mail1 = document.getElementById('mail1').value;
    //
    //        var pass1 = document.getElementById('pass1').value;
    //        var getbtn = document.getElementById('submitbtn');
    //        getbtn.parentNode.parentNode.childNodes[0].innerHTML = name1;
    //        getbtn.parentNode.parentNode.childNodes[1].innerHTML = mail1;
    //        getbtn.parentNode.parentNode.childNodes[2].innerHTML = pass1;
}
var suc = document.getElementsByClassName('main2')[0];
var isuc = document.getElementsByClassName('mainContent1')[0];


function sure() {
    m.style.opacity = "0";
    m.style.zIndex = "-2";
    m.style.transition = ".3s all";
    mi.style.transition = ".3s all";
    m.style.height = "0";
    mi.style.opacity = "0";
    mi.style.top = "35%";
    mi.style.zIndex = "-1";
    var name1 = document.getElementById('name1').value;
    console.log(name1);
    var mail1 = document.getElementById('mail1').value;

    var pass1 = document.getElementById('pass1').value;
    var getbtn = document.getElementById('submitbtn');
    suc.style.opacity = "2";
    suc.style.zIndex = "1";
    suc.style.transition = ".3s all";
    isuc.style.transition = ".3s all";
    suc.style.height = "100%";
    isuc.style.opacity = "2";
    isuc.style.right = "0";
    isuc.style.zIndex = "1";

    getbtn.parentNode.parentNode.childNodes[0].innerHTML = name1;
    getbtn.parentNode.parentNode.childNodes[1].innerHTML = mail1;
    getbtn.parentNode.parentNode.childNodes[2].innerHTML = pass1;
}

function succesclose() {
    suc.style.opacity = "0";
    suc.style.zIndex = "-2";
    suc.style.transition = ".3s all";
    isuc.style.transition = ".3s all";
    suc.style.height = "0";
    isuc.style.opacity = "0";
    isuc.style.right = "50%";
    isuc.style.zIndex = "-1";
}

function closei() {
    m.style.opacity = "0";
    m.style.zIndex = "-2";
    m.style.transition = ".3s all";
    mi.style.transition = ".3s all";
    m.style.height = "0";
    mi.style.opacity = "0";
    mi.style.top = "35%";
    mi.style.zIndex = "-1";
}



function pop(x) {
    var inner = x.parentNode.parentNode.childNodes[0].innerHTML;
    console.log(x.parentNode.parentNode.childNodes);
    console.log(x.parentNode.parentNode.childNodes[5]);
    document.getElementById('name1').value = inner;
    document.getElementById('mail1').value = x.parentNode.parentNode.childNodes[1].innerHTML;
    document.getElementById('pass1').value = x.parentNode.parentNode.childNodes[2].innerHTML;

    a.style.opacity = "1";
    a.style.zIndex = "1";
    a.style.transition = ".3s all";
    b.style.transition = ".3s all";
    a.style.height = "100%";
    b.style.opacity = "1";
    b.style.top = "50%";
    b.style.zIndex = "1";

}

function popdown() {
    a.style.opacity = "0";
    a.style.zIndex = "-1";
    a.style.transition = ".3s all";
    b.style.transition = ".3s all";
    a.style.height = "100%";
    b.style.opacity = "0";
    b.style.top = "35%";
    b.style.zIndex = "-1";
    logmain.style.opacity = "0";
    logmain.style.zIndex = "-1";
    logmain.style.transition = ".3s all";
    innerform.style.transition = ".3s all";
    logmain.style.height = "100%";
    innerform.style.opacity = "0";
    innerform.style.top = "35%";
    innerform.style.zIndex = "-1";
}
