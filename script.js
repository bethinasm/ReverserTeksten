
// MODEL

let inputString = '';
let reversedString = '';


// VIEW
updateView()
function updateView() {
    let html = `
    
    Skriv inn litt tekst her: 
    <input onchange="saveText(this.value)"/>
    
    <button onclick="reverseText()"> Reverser tekst </button>
    <br>
    <br>
    <div> Her er den reverserte teksten: </div>
    <br> 
    <div> ${reversedString} </div>

    `;
    document.getElementById('app').innerHTML = html;
}



// CONTROLLER

function saveText(inputText) {
    inputString = inputText;
    console.log('Dette ble skrevet inn: ' + inputString);
}

function emptyText(){
    reversedString = '';
}


function reverseText(){
    emptyText()
        // -1 fordi den teller fra høyre til venstre. 
        // loopen kjører så lenger i er større eller lik 0 (fordi 0 er starten)
        // i-- fordi etter hver loop runde blir verdien til i redusert med 1.
    for (let i = inputString.length - 1; i >= 0; i--) {  
        reversedString += inputString.charAt(i);
    }

    console.log('Reversert tekst: ' + reversedString);

    updateView();
}