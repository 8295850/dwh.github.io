var fast = document.querySelector(".fast");
var lis = fast.querySelectorAll('i');

for (var i = 0; i < lis.length; i++) {
    var index = i * 44;
    lis[i].style.backgroundPosition = "0 -" + index + "px";
}