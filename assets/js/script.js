//creo un array di oggetti studenti
var arrStudent = [
  {
  FirstName: 'Roberto',
  LastName: 'Bigozzi',
  Age: 30
},
{
  FirstName: 'Simone',
  LastName: 'Capozzi',
  Age: 31
},
{
  FirstName: 'Luca',
  LastName: 'Logallo',
  Age: 26
},
{
  FirstName: 'Fabio',
  LastName: 'Pisanelli',
  Age: 30
}
];

/* console.log(arrStudent); */



//creo le domande da fare allo studente con il prompt

var newFirstName = prompt("Il tuo nome?");
var newLastName = prompt("Il tuo cognome?");
var newAge = parseInt(prompt("La tua età"));

addStudent(arrStudent, newFirstName, newLastName, newAge);



//creo un ciclo su tutti gli stundenti e stampare per ognuno di essi, nome cognome ed età

for(var ListStudent of arrStudent){
  for ( var key in ListStudent){
    //console.log(ListStudent[key]);
    console.log('Chiave : '+ key + ' valore: ' + ListStudent[key]);
  }
  console.log("-------------------");
}





//FUNCTION
//creo una funzione che mi aggiunga la risposta  dei prompt data dal nuovo studente
function addStudent (target, addFirstName, addLastName, addAge){
  target.push({
    FirstName : addFirstName,
    LastName : addLastName,
    age : addAge
  });
}