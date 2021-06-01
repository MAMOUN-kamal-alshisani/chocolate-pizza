'use strict';

/////global array
let allplaces=[];

/////constructor
function places(Placesname, TripPlace, TypeOfTransport){

this.Placesname=Placesname;
this.TripPlace=TripPlace;
this.TypeOfTransport=TypeOfTransport;
allplaces.push(this);
}

/////set local storage:
function setitems(){
let places=JSON.stringify(allplaces);
localStorage.setItem('trips',places);
}

///////get local storage:

function getitems(){
let placesstring=localStorage.getItem('trips');
let placesobject=JSON.parse(placesstring);
if(placesobject!==null)
{  allplaces = placesobject;}
}

////adding event listener:

let theform=document.getElementById('myform');

theform.addEventListener('submit',function(event){
event.preventDefault();

let Placesname,TripPlace,TypeOfTransport;

Placesname=event.target.Name.value;

TripPlace=event.target.trips.value;

TypeOfTransport=event.target.Transport.value;
 new places(Placesname,TripPlace,TypeOfTransport);
 allplaces.push(this);
 setitems();
 let theparent=document.getElementById('parent');
let ul=document.getElementById('ul');
theparent.appendChild(ul);

let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// for (let i = 0; i < allplaces.length; i++) {
    

li1.textContent=`place Name: ${allplaces.Placesname}`;
li2.textContent=`trip place: ${allplaces.TripPlace}`;
li3.textContent=`type of transport: ${allplaces.TypeOfTransport}`;
// }




});

getitems();






// theparent.appendChild(thetable);

// function thetableheads(){

// let tr1=document.createElement('tr');
// thetable.appendChild(tr1);
// let th1 =document.createElement('th');
// tr1.appendChild(th1);



// }

// thetableheads();