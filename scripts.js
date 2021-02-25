
function opened() {
    let bulbs = document.getElementById('bulblg');
    let img = bulbs.src = "open bulb.png";
    document.getElementById('bulblg').innerHTML = img;
    bulbs.setAttribute('class','openbulb');
    console.log('hi');
}

function closes() {
    let bulbs = document.getElementById('bulblg');
    let img = bulbs.src = "closed bulb.png";
    document.getElementById('bulblg').innerHTML = img;
    bulbs.setAttribute('class','closebulb');
    console.log('hi2');

}