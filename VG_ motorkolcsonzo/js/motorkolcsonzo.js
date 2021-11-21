function $(id){
    return document.getElementById(id);
}

var tipus1 = {
    honda: true,
    nev: "RC213V-S",
    kep: 'images/motorok/RC213V-S.png',
}

var tipus2 = {
    honda: true,
    nev: "CBR1000RR-R SP",
    kep: 'images/motorok/cbr1000rr-rsp.png',
}

var tipus3 = {
    honda: true,
    nev: "CBR1000RR-R",
    kep: 'images/motorok/cbr1000rr-r.png',
}

var tipus4 = {
    honda: true,
    nev: "CBR650R",
    kep: 'images/motorok/cbr650r.png',
}

var tipus5 = {
    honda: true,
    nev: "CBR500R",
    kep: 'images/motorok/cbr500r.png',
}

var tipus6 = {
    honda: false,
    nev: "HAYABUSA",
    kep: 'images/motorok/hayabusa.png',
}

var tipus7 = {
    honda: false,
    nev: "GSX-R1000R ABS",
    kep: 'images/motorok/suzuki_r1000r.png',
}

var tipus8 = {
    honda: false,
    nev: "V-STROM 1050XT ABS",
    kep: 'images/motorok/v-storm.png',
}

var tipus9 = {
    honda: false,
    nev: "SV650 ABS",
    kep: 'images/motorok/sv650.png',
}

var tipus10 = {
    honda: false,
    nev: "RM-Z450",
    kep: 'images/motorok/rm-z450.png',
}

let tipusok = new Array();
tipusok.push(tipus1);
tipusok.push(tipus2);
tipusok.push(tipus3);
tipusok.push(tipus4);
tipusok.push(tipus5);
tipusok.push(tipus6);
tipusok.push(tipus7);
tipusok.push(tipus8);
tipusok.push(tipus9);
tipusok.push(tipus10);

function beallit(){
    for (let i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    for(let i = 0; i < tipusok.length; i++){
        var newOption = document.createElement('OPTION');
        var newOptionValue = document.createTextNode(tipusok[i].nev);
        newOption.appendChild(newOptionValue);
        document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
        /*https://www.youtube.com/watch?v=GBDMr24O_rs*/
    }
}

function markaBeallit(){
    let honda = document.forms['urlap']['marka'].value == 'Honda';
    for (let i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    if(honda){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].honda){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }else{
        for(let i = 0; i < tipusok.length; i++){
            if(!tipusok[i].honda){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }
}
let validAll = true;
function controllName(){
    let name = document.forms['urlap']['nev'].value;
    let spaces = 0;
    let valid = true;
    for(let i = 0; i < name.length; i++){
        if(name.charAt(i) == ' '){
            spaces++;
        }
    }
    if(spaces > 0){
        let firstIndex = 0;
        for(let i = 0; i < name.length; i++){
            if(name.charAt(i) == ' '){
                firstIndex = i;
                break;
            }
        }
        if(firstIndex == 0){
            valid = false;
        }
        if(firstIndex == name.length-1){
            valid = false;
        }
    }else{
        valid = false;
    }
    if(!valid){
        window.alert('Helytelen nevet adott meg!');
        validAll = false;
    }
}

function controllEMail(){
    let name = document.forms['urlap']['email'].value;
    let domains = ['.com','.hu','.uk','.ro','.ar','.eu'];
    let numbers = '0123456789';
    let parts = ['','',''];
    let index = 0;
    for(let i = 0; i < name.length; i++){
        if(name.charAt(i) == '@'){
            index = 1;
        }
        if(name.charAt(i) == '.' && index == 1){
            index = 2;
        }
        parts[index] += name.charAt(i);
    }
    let err = false;
    if(parts[0].length < 1){
        err = true;
    }
    let part2hasNumber = false;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < parts[1].length; j++){
            if(numbers.charAt(i) == parts[1].charAt(j)){
                part2hasNumber = true;
                break;
            }
        }
    }
    if(!err && (parts[1].length < 2 || part2hasNumber)){
        err = true;
    }
    let part3hasDomain = false;
    for(let i = 0; i < domains.length; i++){
        if(domains[i] == parts[2]){
            part3hasDomain = true;
            break;
        }
    }
    if(!err && (parts[2].length < 2 || !part3hasDomain)){
        err = true;
    }
    if(err){
        window.alert('Helytelen e-mailcímet adott meg!');
        validAll = false;
    }
}

function controllNumber(){
    let phnum = document.forms['urlap']['telefonszam'].value;
    let copy = '';
    let numbers = '0123456789';
    for(let i = 0; i < phnum.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(phnum.charAt(i) == numbers.charAt(j)){
                copy += phnum.charAt(i);
            }
        }
    }
    if(copy.length != phnum.length || phnum.length != 11){
        window.alert('Helytelen telefonszámot adott meg!');
        validAll = false;
    }
}

function controllLicence(){
    let jogos = document.forms['urlap']['vanejogsi'].value == 'Igen';
    if(!jogos){
        window.alert('Ön nem vezethet jogosítvány nélkül!');
        validAll = false;
    }
}

function kiir(){
    let tipus = document.forms['urlap']['tipus'].value;
    if(validAll){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].nev == tipus){
                $('kep').src = tipusok[i].kep;
                $('motorka').innerHTML = 'Sikeres foglalás!';
                $('vegszoveg').innerHTML = 'A további információkat emailben elküldtük.';
            }
        }
    }
}

function controllTobbi(){
    let marka = document.forms['urlap']['marka'].value;
    let tipus = document.forms['urlap']['tipus'].value;
    let ido = document.forms['urlap']['idopont'].value;
    let jogszam = document.forms['urlap']['jogositvany'].value;
    let kolcsonzo = document.forms['urlap']['kolcsonzo'].value;
    if(marka == '' || tipus == '' || ido == '' || jogszam == '' || kolcsonzo == ''){
        window.alert('Ne hagyjon üresen mezőt!');
        validAll = false;
    }
}

function ellenoriz(){
    validAll = true;
    controllName();
    controllEMail();
    controllNumber();
    controllLicence();
    controllTobbi();
    kiir();
}

function init(){
    beallit();
    $('gomb').addEventListener('click',ellenoriz,false);
    document.forms['urlap']['marka'].addEventListener('click',markaBeallit,false);
}

window.addEventListener("load", init, false);