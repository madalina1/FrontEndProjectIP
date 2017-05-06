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

  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  display6: boolean = false;
  display7: boolean = false;
  display8: boolean = false;

  text2: string;

  showDialog1() {
    this.display1 = true;
  }

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
