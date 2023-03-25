// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//    -input text: numero chilometri 
//         -const: numero km
//    -input radio check: under 18, over 65
//         -const: under 18
//         -const: over 65

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    -calcolo prezzo viaggio base
//         -let: costo viaggio
//              -numero km * 0.21

// va applicato uno sconto del 20% per i minorenni
//    -controllo sconto minorenni
//         -let: under 18 cost
//              -costo viaggio * 0.2

// va applicato uno sconto del 40% per gli over 65.
//    -controllo over 65
//         -let: over 65 cost
//              -costo viaggio * 0.4               

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//    -if under18 true
//         - display under18cost
//    -else if over65 true
//         -display over65cost


//versione 1 input in km no nome e specifiche biglietto


// function getprice() {
//     const kmnumber = document.getElementById(`kmnumber`).value;
//     let under18 = document.getElementById('under18').checked;
//     let over65 = document.getElementById('over65').checked;
//     let basecost = (kmnumber * 0.21).toFixed(2);
//     let under18cost = (basecost * 0.8).toFixed(2);
//     let over65cost = (basecost * 0.6).toFixed(2);

//        if (under18 == true){

//         document.getElementById('result').innerHTML =` ${ under18cost }`;

//         document.getElementById('yt').innerHTML =` 
//         <h4 class="mb-4">Your Ticket:</h4>
//         <span class="d-block mb-4">Age: <span class="text-warning">under 18</span></span>
//         <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
//         <span class="d-block">Price: <span class="text-warning">€ ${ under18cost }</span></span>`;
//         document.querySelector('#ticketv').classList.remove("d-none");

//        } else if (over65 == true){

//         document.getElementById('result').innerHTML =` ${ over65cost }`;

//         document.getElementById('yt').innerHTML =` 
//         <h4 class="mb-4">Your Ticket:</h4>
//         <span class="d-block mb-4">Age: <span class="text-warning">over 65</span></span>
//         <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
//         <span class="d-block">Price: <span class="text-warning">€ ${ over65cost }</span></span>`;
//         document.querySelector('#ticketv').classList.remove("d-none");

//        } else {

//         document.getElementById('result').innerHTML =` ${ basecost }`;

//         document.getElementById('yt').innerHTML =` 
//         <h4 class="mb-4">Your Ticket:</h4>
//         <span class="d-block mb-4">Age: <span class="text-warning">regular adult</span></span>
//         <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
//         <span class="d-block">Price: <span class="text-warning">€ ${ basecost }</span></span>`;
//         document.querySelector('#ticketv').classList.remove("d-none");
       
//        } 

//     console.log( `numero km: ${kmnumber} costo standart: ${basecost} costo under18: ${under18cost} costo over65: ${over65cost} over65 c: ${over65} under18 c: ${under18}` );
// }


// versione 2

function getprice() {
    const departure = document.getElementById('inputGroupSelect01').value;
    const arrival = document.getElementById('inputGroupSelect02').value;
    const name = document.getElementById('name').value;
    let under18 = document.getElementById('under18').checked;
    let over65 = document.getElementById('over65').checked;
    let kmnumber = 0;
    let seat = Math.floor(Math.random() * 100) + 1;
    let tnumber = Math.floor(Math.random() * 1000) + 1;
    var ticketv = document.getElementById("ticketv")
  
    if (departure === 'Milan' && arrival === 'Rome') {
        kmnumber = 573;
    } else if (departure === 'Milan' && arrival === 'Florence') {
        kmnumber = 315;
    } else if (departure === 'Rome' && arrival === 'Florence') {
        kmnumber = 282;
    } else if (departure === 'Rome' && arrival === 'Milan') {
        kmnumber = 573;
    } else if (departure === 'Florence' && arrival === 'Rome') {
        kmnumber = 282;
    } else if (departure === 'Florence' && arrival === 'Milan') {
        kmnumber = 315;
    } 

    let basecost = (kmnumber * 0.21).toFixed(2);
    let under18cost = (basecost * 0.8).toFixed(2);
    let over65cost = (basecost * 0.6).toFixed(2);
    
    if (under18 == true && kmnumber > 0) {

        ticketv.classList.remove("d-none")
        document.getElementById('pname').innerHTML =` ${ name }`;
        document.getElementById('rate').innerHTML =` Under 18 `;
        document.getElementById('departure').innerHTML =` ${ departure }`;
        document.getElementById('arrival').innerHTML =` ${ arrival }`;
        document.getElementById('price').innerHTML =` €${ under18cost }`;
        document.getElementById('seat').innerHTML =` ${ seat }`;
        document.getElementById('tnumber').innerHTML =` TRAIN NUMBER: ${ tnumber }`;
        
          
    } else if (over65 == true && kmnumber > 0) {
     
        ticketv.classList.remove("d-none")
        document.getElementById('pname').innerHTML =` ${ name }`;
        document.getElementById('rate').innerHTML =` over 65 `;
        document.getElementById('departure').innerHTML =` ${ departure }`;
        document.getElementById('arrival').innerHTML =` ${ arrival }`;
        document.getElementById('price').innerHTML =` €${ over65cost }`;
        document.getElementById('seat').innerHTML =` ${ seat }`;
        document.getElementById('tnumber').innerHTML =` TRAIN NUMBER: ${ tnumber }`;
    
    } else if(kmnumber > 0) {
        
        ticketv.classList.remove("d-none")
        document.getElementById('pname').innerHTML =` ${ name }`;
        document.getElementById('rate').innerHTML =` Standart `;
        document.getElementById('departure').innerHTML =` ${ departure }`;
        document.getElementById('arrival').innerHTML =` ${ arrival }`;
        document.getElementById('price').innerHTML =` €${ basecost }`;
        document.getElementById('seat').innerHTML =` ${ seat }`;
        document.getElementById('tnumber').innerHTML =` TRAIN NUMBER: ${ tnumber }`;

    } else {


    }

    
    

    console.log( `Name:${name} From: ${departure} To: ${arrival} Under18: ${under18} Over65: ${over65} Km: ${kmnumber}` )
}

function refresh() {
    document.location.reload();
}