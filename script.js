window.onload= oppstart;

var treUtvikling = [];
treUtvikling[0] = [20,31,53,89,102,117]
treUtvikling[1] = [23,39,72,89,92,99]
treUtvikling[2] = [4,6,8,12,15,18]

var årstall=["1915","1950","1970","1990", "1992", "2000"];
var tresort=["Furu", "Gran" , "Lauvtre"];


var startÅrstall = '<select id="år1">'; //lager første boks

for (let index = 0; index < årstall.length; index++) {
    startÅrstall += '<option value="'+index+'">'+årstall[index] + '</option>';
    
}
valgboks1.innerHTML += startÅrstall + "</select>"; //skriver ut første boks

var sluttÅrstall = '<select id="år2">'; //lager andre boks

for (let index = 0; index < årstall.length; index++) {
    sluttÅrstall += '<option value="'+index+'">'+årstall[index] + '</option>';
    
}
valgboks2.innerHTML += sluttÅrstall + "</select>"; //skriver ut andre boks

var tre = '<select id="tresort1">'; //lager tredje boks

for (let index = 0; index < tresort.length; index++) {
    tre += '<option value="'+index+'">'+tresort[index] + '</option>';
    
}
valgboks3.innerHTML += tre + "</select>"; //skriver ut tredje boks


function oppstart(){
document.getElementById("submitKnapp").onclick= submitFunk;
}

function submitFunk(){

    console.log("Funksjonen submitFunk fungerer");

    år1= document.getElementById("år1").value; //henter inn verdien til året du velger
    console.log(år1);

    år2= document.getElementById("år2").value;//henter inn verdien til året du velger
    console.log(år2);

    tresort1= document.getElementById("tresort1").value; //henter inn verdien til tresorten du velger
    console.log(tresort1);

   var økning=treUtvikling[tresort1][år2] - treUtvikling[tresort1][år1]; //økningen finner vi ved å ta antall millioner i siste minus antall millioner i første år valgt, 
   var type = tresort[tresort1]; //finner tretypen
   var forsteÅrstall = årstall[år1];//finner første årstall
   var sisteÅrstall = årstall[år2]; //finner siste årstall
   console.log(type)
   console.log(forsteÅrstall)
   console.log(sisteÅrstall)

   var prosent = ((økning/treUtvikling[tresort1][år1])*100).toFixed(2); //(økning/opprinnelig verdi *100)

    if(år2>år1){ 
        
        document.getElementById("svar").innerHTML="Økningen fra " + årstall[år1] + " til " + årstall[år2] + " er på " + økning + " millioner."
        + " Dette utgjør en prosent på " + prosent + "%." 
        + " Nedenfor vil du se en oversikt over antall trær fra årene " + årstall[0] + " til "+ årstall[årstall.length-1] + " for " + tresort[tresort1] + ".";
        
    }

    else if(år2<år1){

        document.getElementById("svar").innerHTML="Minkingen fra " + årstall[år1] + " til " + årstall[år2] + " er på " + økning+ " millioner."
        + " Dette utgjør en prosent på " + prosent + "%." 
        + " Nedenfor vil du se en oversikt over antall trær fra årene " + årstall[0] + " til "+ årstall[årstall.length-1] + " for " + tresort[tresort1] + "." ;
  
    }


    else{
        document.getElementById("svar").innerHTML="Du har valgt å se på utviklingen for samme år. Antall trær har derfor ikke endret seg.";
    }


    for (let index = 0; index < tresort.length; index++) {
    document.getElementById('tresort1').value == index; //løkke som henter verdien til tretypen du har valgt, og sjekker om den er lik noen av verdiene til tresort.length
    tegn(); //funksjonen tegn skal kjøre da.
  }
  }


    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
function tegn(){
        
   
    ctx.clearRect(0,0,900,650); //nullstiller canvas-siden

    var element = 0;
    var tekst=0; //variabel isteden for bruk av index. Teksten på første syle vises ikke om index=0

   for (let index = 0; index < treUtvikling[tresort1].length; index++) {
        element = treUtvikling[tresort1][index];
        tekst++ //variablen tekst øker for hver gang

        ctx.fillStyle = 'black'; //fargen på søylen
        ctx.font = '20px serif'; //skrift
        ctx.fillText(element + " millioner i " + årstall[index], 20, 79*tekst); //teksten
        ctx.fillRect(10, 80*tekst, treUtvikling[tresort1][index]*5, 40);  //tegner søylene. Lengden er avhengig av index verdi 
    
}

}