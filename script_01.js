"use strict";

/* Die Satzbau-Maschine | Arrays */


// let arr;
// //arr=new Array(); //Konstruktur 
// arr=[];
// arr=[2,7,11,4];
// arr=[false,true,false];
// arr=["Ich","bin","Max","Mütze"];

// output(arr);
// output(arr.lenght); //Anzahl der Elemente
// output(arr[0]); // Index 0, 1. Position
// output(array[3]); // letzte Position /konkret
// output(arr[arr.length-1]); // letzte Pos. / allgmein 

// () --> Parameter, Tests
// {} -->Codeblöcke 
// []-->Arrays, Indexe 

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

output(getSentence("Ich","bin","Max","Mütze"));
output(getSentence("Ich","bin","der","coole","Max","Mütze"));
output(getSentence("Ich","bin","die","coole","Maxine","Mützin"));

//more of the same

// function getSentence(word1,word2,word3,word4,word5,word6){
// const GAP   =" ";
// const PUNCT =".";
// let str     = word1 + GAP +
//               word2 + GAP + 
//               word3 + GAP + 
//               word4 + GAP +
//               word5 + GAP +
//               word6 + PUNCT;

// return str;
// };

/* 01a. Funktionalität mit Array 1 */

//Kritik | Überlegung 
// word 1, word 2, ... WordN :: Semantische Struktur 
//arr[0], arr[1], .... array[N] :: Nummerische Struktur
//--> Transformation eines semantischen Problems in ein Nummerisches
output(getSentenceArr(["Ich","bin","die","brave","Maxine","Mützin"]))
function getSentenceArr(arr){
    const GAP   =" ";
    const PUNCT =".";
    let str     = arr[0] + GAP +
                  arr[1] + GAP + 
                  arr[2] + GAP + 
                  arr[3] + GAP +
                  arr[4] + GAP +
                  arr[5] + PUNCT;
    
    return str;
    };

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
};


