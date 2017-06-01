import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { TransportInput } from '../../model/TransportInput.model';
import { TransportDocService } from '../../services/transportDoc.service';
import { Request } from '../../model/Request.model';
import { WithdrawalInput } from '../../model/WithdrawalInput.model';
import { WithdrawalDocService } from '../../services/withdrawalDoc.service';
import { InterruptionInput } from '../../model/InterruptionInput.model';
import { DiplomaInput } from '../../model/DiplomaInput.model';
import { ScolarSituationInput } from '../../model/ScolarSituationInput.model';
import { LicenseInput } from '../../model/LincenseInput.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  anulAbsolvirii: number;
  competentaLingvisticaSum: number;
  repetareExamenSum: number;

  competentaLingvisticaDate: string;
  repetareExamenDate: string;

  serie: string;
  an: string;
  accept: boolean = false;

  dinSemestrul: number;
  dinAnul: number;
  pentruXSemestre: number;

  tema: string;
  coordonator: string;

  public examTypes = Array<String>();

  public diplomaTypes = Array<String>();

  public studentTypes = Array<String>();

  public courses = Array<String>();

  public years = Array<String>();

  public studies = Array<String>();

  constructor(private  transportService: TransportDocService, private withdrawalService: WithdrawalDocService) {
    this.examTypes = [];
    this.examTypes.push("Licenta");
    this.examTypes.push("Disertatie");

    this.diplomaTypes = [];
    this.diplomaTypes.push("Diploma de Bacalaureat");
    this.diplomaTypes.push("Diploma de Licenta");

    this.studentTypes = [];
    this.studentTypes.push("Student");
    this.studentTypes.push("Cursant");

    this.studies = [];
    this.studies.push("Licenta");
    this.studies.push("Master");

    this.courses = [];
    this.courses.push("Tipuri de cursuri");
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

  checkAn() {
    return (!this.an);
  }

  checkAccept() {
    return (!this.accept);
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

  checkTema() {
    return (!this.tema);
  }

  checkCoordonator() {
    return (!this.coordonator);
  }

  checkAnulAbsolvirii() {
    return (!this.anulAbsolvirii);
  }

  checkCompetentaLingvisticaSum() {
    return (!this.competentaLingvisticaSum);
  }

  checkRepetareExamenSum() {
    return (!this.repetareExamenSum);
  }

  checkCompetentaLingvisticaDate() {
    return (!this.competentaLingvisticaDate);
  }

  checkRepetareExamenDate() {
    return (!this.repetareExamenDate);
  }

  checkPhoneNumber() {
    return ((!this.phoneNumber) || (this.phoneNumber.length != 10));
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

  showDialog4() {
    this.display4 = true;
  }

  showDialog5() {
    this.display5 = true;
  }

  showDialog6() {
    this.display6 = true;
  }


  /** TRANSPORT POPUP **/
  public transportId: string;
  public transportYear: string;

  public triggerId(value) {
    this.transportId = value.toString();
    console.log(this.transportId);
  }

  public triggerYear(value) {
    this.transportYear = value.toString();
    console.log(this.transportYear);
  }

  sendInformation1() {
    if (this.checkSerie())
      this.showDialogError();
    else {
      let transportInput = new TransportInput(this.transportId, this.transportYear);
      console.log(transportInput.yearOfStudy);
      console.log(transportInput.nrSeriesId);

      this.transportService.sendTransportRequest(transportInput)
        .subscribe((data) => this.send(data),
          (error) => this.showError());

      this.showDialogSuccess();
    }

    this.display1 = false;
  }


  /**WITHDRAWAL POPUP **/
  public withdrawalYear: string;
  public withdrwalUniYear: string;
  public withdrawalCourse: string;

  public triggerUnivYear(value) {
    this.withdrwalUniYear = value.toString();
    console.log(this.withdrwalUniYear);
  }

  public triggerCourse(value) {
    this.withdrawalCourse = value.toString();
    console.log(this.withdrawalCourse);
  }

  public studyYear: string;

  public triggerYearWithdrawal(value) {
    this.studyYear = value.toString();
  }

  public currentYear: string;

  public triggerCurrentYearWithdrawal(value) {
    this.currentYear = value.toString();
  }

  sendInformation2() {
    if (this.checkSerie())
      this.showDialogError();
    else {
      console.log('inainte' + this.studyYear);
      console.log('inainte' + this.currentYear);
      let input = new WithdrawalInput(this.transportId, this.currentYear, this.studyYear, this.withdrawalCourse);
      console.log(input.course);
      console.log(input.nrSeriesId);
      console.log(input.yearOfStudy);//INFO
      console.log(input.currentYear);

      this.withdrawalService.sendWithdrawalRequest(input)
        .subscribe((data) => this.send(data),
          (error) => this.showError());

      this.showDialogSuccess();
    }
    this.display2 = false;
  }

  private send(data: any) {
    let request = new Request(data);
    console.log(request.id);

    this.showDialogSuccess();
  }

  private showError() {
    console.log("Couldn't send request");
  }


  /**STUDIES INTERRUPTION POPUP **/

  public interruptionStartingSem: number;
  public interruptionFromUnivYear: number;
  public interruptionNumberOfSem: number;

  public triggerStartingSem(value) {
    this.interruptionStartingSem = value.toString();
    console.log(this.interruptionStartingSem);
  }

  public triggerFromUnivYear(value) {
    this.interruptionFromUnivYear = value.toString();
    console.log(this.interruptionFromUnivYear);
  }

  public triggerNumberOfSem(value) {
    this.interruptionNumberOfSem = value.toString();
    console.log(this.interruptionNumberOfSem);
  }

  sendInformation3() {
    if (this.checkAn() || this.checkAccept() || this.checkDinSemestrul() ||
      this.checkDinAnul() || this.checkPentruXSemestre())
      this.showDialogError();
    else {
      let input = new InterruptionInput(this.studyYear, this.currentYear, this.interruptionStartingSem,
        this.interruptionFromUnivYear, this.interruptionNumberOfSem);
      console.log(input.currentYear);
      console.log(input.yearOfStudy);
      console.log(input.startingSemester);
      console.log(input.fromUniversityYear);
      console.log(input.numberOfSemesters);
      /*
       this.withdrawalService.sendInterruptionRequest(input)
       .subscribe((data) => this.send(data),
       (error) => this.showError());
       */

      this.showDialogSuccess();
    }
    this.display3 = false;
  }

  /** DIPLOMA REQUEST POPUP **/

  sendInformation4() {
    if (this.checkAn() || this.checkAccept())
      this.showDialogError();
    else {
      let input = new DiplomaInput(this.currentYear, this.studyYear);
      console.log(input.currentYear);
      console.log(input.yearOfStudy);

      /*
       this.withdrawalService.sendDiplomaRequest(input)
       .subscribe((data) => this.send(data),
       (error) => this.showError());
       */

    }
    this.display4 = false;
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  /** SCOLAR SITUATION POPUP **/

  public hasReceipt: string;

  public triggerHasReceipt(value) {
    this.hasReceipt = value.toString();
    console.log(this.hasReceipt);
  }

  sendInformation5() {
    if (this.checkAn() || this.checkAccept())
      this.showDialogError();
    else {
      let input = new ScolarSituationInput(this.studyYear, this.currentYear, this.hasReceipt);
      console.log(input.yearOfStudy);
      console.log(input.currentYear);
      console.log(input.hasBroughtReceipt);
      /*
       this.withdrawalService.sendScolarSituationRequest(input)
       .subscribe((data) => this.send(data),
       (error) => this.showError());
       */

      this.showDialogSuccess();
    }
    this.display5 = false;
  }

  /** LICENSE REGISTRATION POPUP **/

  public graduationYear: number;

  public triggerGraduationYear(value) {
    this.graduationYear = value.toString();
    console.log(this.graduationYear);
  }

  public dateReceiptLinguisticCompetence: string;

  public triggerDateReceiptLinguisticCompetence(value) {
    this.dateReceiptLinguisticCompetence = value.toString();
    console.log(this.dateReceiptLinguisticCompetence);
  }

  public paymentReceiptLinguisticCompetence: number;

  public triggerPaymentReceiptLinguisticCompetence(value) {
    this.paymentReceiptLinguisticCompetence = value.toString();
    console.log(this.paymentReceiptLinguisticCompetence);
  }

  public dateReceiptRedoLicenseExam: string;

  public triggerDateReceiptRedoLicenseExam(value) {
    this.dateReceiptRedoLicenseExam = value.toString();
    console.log(this.dateReceiptRedoLicenseExam);
  }

  public paymentReceiptRedoLicenseExam: number;

  public triggerPaymentReceiptRedoLicenseExam(value) {
    this.paymentReceiptRedoLicenseExam = value.toString();
    console.log(this.paymentReceiptRedoLicenseExam);
  }

  public licenseTopic: string;

  public triggerLicenseTopic(value) {
    this.licenseTopic = value.toString();
    console.log(this.licenseTopic);
  }

  public coordinatorProf: string;

  public triggerCoordinatorProf(value) {
    this.coordinatorProf = value.toString();
    console.log(this.coordinatorProf);
  }

  public phoneNumber: string;

  public triggerPhoneNumber(value) {
    this.phoneNumber = value.toString();
    console.log(this.phoneNumber);
  }

  sendInformation6() {
    if (this.checkAnulAbsolvirii() || this.checkCompetentaLingvisticaDate() || this.checkCompetentaLingvisticaSum() ||
      this.checkRepetareExamenDate() || this.checkRepetareExamenSum() ||
      this.checkTema() || this.checkCoordonator() || this.checkPhoneNumber())
      this.showDialogError();
    else {
      let input = new LicenseInput(this.graduationYear, this.dateReceiptLinguisticCompetence, this.paymentReceiptLinguisticCompetence,
        this.dateReceiptRedoLicenseExam, this.paymentReceiptRedoLicenseExam, this.licenseTopic, this.coordinatorProf, this.phoneNumber);
      console.log(input.graduationYear);
      console.log(input.dateReceiptLinguisticCompetence);
      console.log(input.paymentReceiptLinguisticCompetence);
      console.log(input.dateReceiptRedoLicenseExam);
      console.log(input.paymentReceiptRedoLicenseExam);
      console.log(input.licenseTopic);
      console.log(input.coordinatorProf);
      console.log(input.phoneNumber);
      /*
       this.withdrawalService.sendLicenseRequest(input)
       .subscribe((data) => this.send(data),
       (error) => this.showError());
       */

      this.showDialogSuccess();
    }
    this.display6 = false;
  }

}
