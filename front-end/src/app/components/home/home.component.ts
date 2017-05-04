import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  constructor() {
  }

  ngOnInit() {
  }

  showPopup1() {
    this.popup1.options = {
      header: "Trimite cererea",
      color: "#3C718E", // red, blue....
      widthProsentage: 30, // The with of the popup measured by browser width
      animationDuration: 0.5, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "Trimite", // The text on your confirm button
      cancleBtnContent: "Anuleaza", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
    this.popup1.show(this.popup1.options);
  }

  showPopup2(){
    this.popup2.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default", // "btn btn-mbe-attack" pt submit?
      color: "#3C718E",
      header: "Trimite Cererea",
      widthProsentage: 30,
      animationDuration: 0.5,
      animation: "fadeInDown",
      cancleBtnContent: "Anuleaza",
      confirmBtnContent: "Trimite"
    };
    this.popup2.show(this.popup2.options);
  }

}
