let speed = document.querySelector("#btn-speed");
if (speed) {
    let ul = speed.parentNode.parentNode;

    speed.parentNode.style.display = 'none';

    [1, 2, 4, 5, 6, 8, 16, 32, 64].forEach(speed => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = "btn-speed btn btn-mid btn-play";
        a.innerText = "X" + speed;
        li.appendChild(a);

        a.addEventListener('click', e => {
            e.preventDefault();
            sessionCamPlayer.setSpeed(speed);
        });

        ul.appendChild(li);
    });

}