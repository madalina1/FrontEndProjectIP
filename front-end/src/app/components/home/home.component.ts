import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  /*
   Am facut cate o variabla display pentru fiecare card (presupunand ca fiecare face cate ceva diferit)
   */
  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  display6: boolean = false;
  display7: boolean = false;
  display8: boolean = false;

  text2: string;

  /*
   La apasarea butonului, popup-ul respectiv va aparea (aici 'popup1')
   */
  showDialog1() {
    this.display1 = true;
  }

  /*
   Cand se apasa "trimite" in pop-up, se inchide popup-ul si se iau informatiile introduse - de implementat
   */
  sendInformation1() {
    this.display1 = false;
    //something to send the request
  }

  showDialog2() {
    this.display2 = true;
  }

  sendInformation2() {
    this.text2 = "";
    this.display2 = false;
    //something to send the request
  }

  showDialog3() {
    this.display3 = true;
  }

  sendInformation3() {
    this.display3 = false;
    //something to send the request
  }

  showDialog4() {
    this.display4 = true;
  }

  sendInformation4() {
    this.display4 = false;
    //something to send the request
  }

  showDialog5() {
    this.display5 = true;
  }

  sendInformation5() {
    this.display5 = false;
    //something to send the request
  }

  showDialog6() {
    this.display6 = true;
  }

  sendInformation6() {
    this.display6 = false;
    //something to send the request
  }

  showDialog7() {
    this.display7 = true;
  }

  sendInformation7() {
    this.display7 = false;
    //something to send the request
  }

  showDialog8() {
    this.display8 = true;
  }

  sendInformation8() {
    this.display8 = false;
    //something to send the request
  }

}
