document.addEventListener("DOMContentLoaded", () => {

    const head = document.getElementsByTagName("head")[0];

    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', chrome.extension.getURL('playback.js'));
    head.appendChild(s);

    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('playback.css');

    head.appendChild(style);


});

