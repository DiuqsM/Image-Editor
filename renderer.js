

function button1Click(){
    console.log(window.myAPI);
}

//loads any function so that we dont have to worry about where to put the script tag in HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded");
    document.getElementById('btn').addEventListener('click', button1Click);
});
