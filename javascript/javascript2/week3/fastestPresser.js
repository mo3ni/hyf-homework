// Homework assginment the fastest presser
// JavaScript Week6 

function keyPres () {
    document.body.addEventListener('keypress', key => {
        var recognizeKey = key.which;
        let keyS = 115;
        let keyL = 108;
        if (recognizeKey === keyS) {
            displayBoxOne.innerHTML = playerOne++;

        }
        else if (recognizeKey === keyL) {
            displayBoxTwo.innerHTML = playerTwo++;
        }
    });
}
let btn,box,
// not finished
