console.log("sessioncam scrollfix applied");

function scroll() {
    Array.prototype.slice.call(document.querySelectorAll(".tile-list"))
        .forEach(function(tileList) {
            let li = tileList.querySelector("li");
            li && (tileList.scrollTop = parseInt(li.style.top));
        });

    setTimeout(scroll, 1000);
}

scroll();

let style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('filterfix.css');
document.querySelector('head').appendChild(style);

console.log("design configuration fix applied");