var content = document.querySelector('.content-tiles');
content.onmousemove = function(event) {
    var mainCt = document.querySelector('.main--container'),
        width = mainCt.clientWidth,
        center = width / 2,
        x = event.clientX,
        percentage = ((x / width) * 100) / 2.5, percentage2 = percentage / 2;


    console.log(width);
    console.log(x);

    if (x > center) {
        // console.log('bigger: ', x, percentage);
        content.style.transform = "translateX(-"+percentage2+"%)";
    } else if (x < center) {
        // console.log('smaller: ', x, percentage);
        content.style.transform = "translateX("+percentage2+"%)";

    }
}

