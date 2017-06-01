import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { TransportInput } from '../../model/TransportInput.model';
import { TransportDocService } from '../../services/transportDoc.service';
import { Request } from '../../model/Request.model';
import { WithdrawalInput } from '../../model/WithdrawalInput.model';
import { WithdrawalDocService } from '../../services/withdrawalDoc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  serie: string;
  an: string;
  accept: boolean = false;

  dinSemestrul: number;
  dinAnul: number;
  pentruXSemestre: number;

  motiv: string;
  tema: string;
  coordonator: string;

  examTypes: SelectItem[];
  selectedExamType: string;
  diplomaTypes: SelectItem[];
  selectedDiplomaType: string;

  studentTypes: SelectItem[];
  selectedStudentType: string;

  public courses = Array<String>();
  selectedCourse: string;

  selectedYear: string;

  studies: SelectItem[];
  selectedStudy: string;

  public years = Array<String>();

  constructor(private  transportService : TransportDocService, private withdrawalService : WithdrawalDocService) {
    this.examTypes = [];
    this.examTypes.push({label: 'Licenta', value: {id: 1, name: 'Licenta', code: 'Licenta'}});
    this.examTypes.push({label: 'Disertatie', value: {id: 2, name: 'Disertatie', code: 'Disertatie'}});

    this.diplomaTypes = [];
    this.diplomaTypes.push({
      label: 'Diploma de Bacalaureat',
      value: {id: 1, name: 'Diploma de Bacalaureat', code: 'Diploma de Bacalaureat'}
    });
    this.diplomaTypes.push({
      label: 'Diploma de Licenta',
      value: {id: 2, name: 'Diploma de Licenta', code: 'Diploma de Licenta'}
    });

    this.studentTypes = [];
    this.studentTypes.push({label: 'Student', value: {id: 1, name: 'Student', code: 'Student'}});
    this.studentTypes.push({label: 'Cursant', value: {id: 2, name: 'Cursant', code: 'Cursant'}});

    this.studies = [];
    this.studies.push({label: 'Licenta', value: {id: 1, name: 'Licenta', code: 'Licenta'}});
    this.studies.push({label: 'Master', value: {id: 2, name: 'Master', code: 'Master'}});

    this.courses = [];
    this.courses.push("Tipuri de cursuri")
    this.courses.push("Cursuri fara frecventa");
    this.courses.push("Cursuri frecventa normala");

    this.years = [];
    this.years.push("INFO1");
    this.years.push("INFO2");
    this.years.push("INFO3");
    this.years.push("MISS1");
    this.years.push("MISS2");
    this.years.push("MLC1");
    this.years.push("MLC2");
    this.years.push("MOC1");
    this.years.push("MSD1");

  }

  ngOnInit() {
  }

  displaySuccess: boolean = false;
  displayError: boolean = false;
  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  display6: boolean = false;

  /////////////////////////////////////////// AFISAREA FERESTRELOR DE SUCCES/EROARE ////////////////////////////////////

  showDialogSuccess() {
    this.displaySuccess = true;
  }

  showDialogError() {
    this.displayError = true;
  }

  //////////////////////////////////////////// VERIFICAREA INFORMATIILOR INTRODUSE /////////////////////////////////////

  checkSerie() {
    return ((this.serie.length != 8) || (!this.serie));
  }

  checkSelectedYear() {
    return (!this.selectedYear);
  }

  checkAn() {
    return (!this.an);
  }

  checkSelectedCourse() {
    return (!this.selectedCourse);
  }

  checkAccept() {
    return (!this.accept);
  }

  checkSelectedStudy() {
    return (!this.selectedStudy);
  }

  checkDinSemestrul() {
    return ((!this.dinSemestrul) || (this.dinSemestrul < 1) || (this.dinSemestrul > 2));
  }

  checkDinAnul() {
    return ((!this.dinAnul) || (this.dinAnul < 1) || (this.dinAnul > 3));
  }

  checkPentruXSemestre() {
    return ((!this.pentruXSemestre) || (this.pentruXSemestre < 1));
  }

  checkSelectedStudentType() {
    return (!this.selectedStudentType);
  }

  checkSelectedDiplomaType() {
    return (!this.selectedDiplomaType);
  }

  checkMotiv() {
    return (!this.motiv);
  }

  checkSelectedExamType() {
    return (!this.selectedExamType);
  }

  checkTema() {
    return (!this.tema);
  }

  checkCoordonator() {
    return (!this.coordonator);
  }

  /////////////////////////////// AFISAREA PUPUP-URILOR SI TRIMITEREA INFORMATIILOR ////////////////////////////////////
  showDialog1() {
    this.display1 = true;
  }


  showDialog2() {
    this.display2 = true;
  }


  showDialog3() {
    this.display3 = true;
  }

  sendInformation3() {
    if(this.checkSerie() || this.checkSelectedYear() || this.checkAn() ||
      this.checkSelectedStudy() || this.checkAccept() || this.checkDinSemestrul() ||
      this.checkDinAnul() || this.checkPentruXSemestre())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display3 = false;
    }

    //serie, selectedYear, an,  selectedStudy, accept, dinSemestrul, dinAnul, pentruXSemestre
  }

  showDialog4() {
    this.display4 = true;
  }

  sendInformation4() {
    if(this.checkSelectedStudentType() || this.checkSelectedYear() || this.checkAn() ||
      this.checkSelectedDiplomaType() || this.checkAccept() || this.checkMotiv())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display4 = false;
    }
    //selectedStudentType, selectedYear, an, dimplomaType, motiv, accept
  }

  showDialog5() {
    this.display5 = true;
  }

  sendInformation5() {
    if(this.checkAn() || this.checkSelectedStudentType() ||this.checkSelectedStudy() ||
      this.checkAccept() || this.checkMotiv())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display5 = false;
    }
    //selectedYear, an, SelectedStudy, motiv, accept
  }

  showDialog6() {
    this.display6 = true;
  }

  sendInformation6() {
    if(this.checkAn() || this.checkSelectedStudentType() ||this.checkSelectedExamType() ||
      this.checkTema() || this.checkCoordonator())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display6 = false;
    }
    //selectedYear, an, Examtype, tema, coordonator
  }


  /** TRANSPORT POPUP **/
  public transportId   : string;
  public transportYear : string;

  public triggerId(value) {
      this.transportId = value.toString();
      console.log(this.transportId);
  }

  public triggerYear(value){
    this.transportYear = value.toString();
    console.log(this.transportYear);
  }

  sendInformation1() {
    if(this.checkSerie())
      this.showDialogError();
    else {
      let transportInput = new TransportInput(this.transportId,this.transportYear);
      console.log(transportInput.yearOfStudy);
      console.log(transportInput.nrSeriesId);

      this.transportService.sendTransportRequest(transportInput)
        .subscribe((data) => this.send(data),
          (error) => this.showError());
    }

    this.display1 = false;
  }


/**WITHDRAWAL POPUP **/
  public withdrawalYear : string;
  public withdrwalUniYear : string;
  public withdrawalCourse : string;

  public triggerUnivYear(value){
    this.withdrwalUniYear = value.toString();
    console.log(this.withdrwalUniYear);
  }

  public triggerCourse(value) {
    this.withdrawalCourse = value.toString();
    console.log(this.withdrawalCourse);
  }

  public studyYear : string;
  public  triggerYearWithdrawal(value){
    this.studyYear = value.toString();
  }

  public currentYear : string;
  public triggerCurrentYearWithdrawal(value){
    this.currentYear = value.toString();
  }

  sendInformation2() {
    if(this.checkSerie() )
      this.showDialogError();
    else {


      console.log('inainte' + this.studyYear);
      console.log('inainte' + this.currentYear);
      let input = new WithdrawalInput(this.transportId,this.currentYear,this.studyYear,this.withdrawalCourse);
      console.log(input.course);
      console.log(input.nrSeriesId);
      console.log(input.yearOfStudy);//INFO
      console.log(input.currentYear);

      this.withdrawalService.sendWithdrawalRequest(input)
        .subscribe((data) => this.send(data),
          (error) => this.showError());

      this.display2 = false;
    }
    //serie, selectedYear, an, selectedCourse, accept
  }


  private send(data: any){
    let request = new Request(data);
    console.log(request.id);

    this.showDialogSuccess();
  }

  private showError(){
    console.log("Couldn't send request");
  }

}
