import { Component } from '@angular/core';
import  firebase  from 'firebase';
import { firebaseDb } from 'firebase/database'

var config = {
  apiKey: "AIzaSyApV_GjzxUqHN0hhZ7hp634fm3agbZUWcY",
  authDomain: "acis-676.firebaseapp.com",
  databaseURL: "https://acis-676.firebaseio.com",
  projectId: "acis-676",
  storageBucket: "acis-676.appspot.com",
  messagingSenderId: "229859729202"
};
firebase.initializeApp(config)

//var ocarm = document.getElementById('carm_10_s')
//const carmdbRef_10: firebaseDb.Reference = firebase.database().ref('/Main/').child('/Signature/').child('/Carmela/').child('/carm-10/');
//carmdbRef_10.on('value', snap => ocarm.innerHTML = snap.val());

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
 //public carm_Ref_10  = {};
  //public carm_Ref_16 = {};



  constructor() {


    //const carmdbRef_10: firebaseDb.Reference = firebase.database().ref('/Main/').child('/Signature/').child('/Carmela/').child('/carm-10/');
   // carmdbRef_10.on('value', snap => this.carm_Ref_10 = snap.val());

   // const carmRef_16: firebaseDb.Reference = firebase.database().ref('Main').child('Signature').child('Carmela').child('carm-16');
   // carmRef_16.on('value', carmSnapshot => this.carm_Ref_16 = carmSnapshot.val());


  }




}


