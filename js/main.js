const fullscreenBtn = document.getElementById("fullscreen-btn");
let bgColorElement = document.getElementById("primary-colorview");
let colorPicker = document.getElementById("color-picker");

window.addEventListener("load", startup, false);

function startup()
{
    fullscreenBtn.addEventListener('click', fullscreenToggle, false);
    colorPicker.addEventListener('change', changeColor, false);
    colorPicker.select();
}

function fullscreenToggle()
{
    if (document.fullscreenElement)
    {
        document.exitFullscreen();
    }
    else
    {
        document.documentElement.requestFullscreen();
    }
}

function changeColor(event)
{
    bgColorElement.style.backgroundColor = event.target.value;
    console.log(event.target.value);
}


