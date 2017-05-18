import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

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

  courses: SelectItem[];
  selectedCourse: string;

  years: SelectItem[];
  selectedYear: string;

  studies: SelectItem[];
  selectedStudy: string;

  constructor() {
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
    this.courses.push({label: 'Cursuri de Zi', value: 'Cursuri de Zi'});
    this.courses.push({label: 'Cursuri de Noapte', value: 'Cursuri de Noapte'});
    this.courses.push({label: 'Cursuri de Pranz', value: 'Cursuri de Pranz'});

    this.years = [];
    this.years.push({label: 'INFO1', value: {id: 1, name: 'INFO1', code: 'INFO1'}});
    this.years.push({label: 'INFO2', value: {id: 2, name: 'INFO2', code: 'INFO2'}});
    this.years.push({label: 'INFO3', value: {id: 3, name: 'INFO3', code: 'INFO3'}});
    this.years.push({label: 'MISS1', value: {id: 4, name: 'MISS1', code: 'MISS1'}});
    this.years.push({label: 'MISS2', value: {id: 5, name: 'MISS2', code: 'MISS2'}});
    this.years.push({label: 'MLC1', value: {id: 6, name: 'MLC1', code: 'MLC1'}});
    this.years.push({label: 'MLC2', value: {id: 7, name: 'MLC2', code: 'MLC2'}});
    this.years.push({label: 'MOC1', value: {id: 8, name: 'MOC1', code: 'MOC1'}});
    this.years.push({label: 'MOC2', value: {id: 9, name: 'MOC2', code: 'MOC2'}});
    this.years.push({label: 'MSD1', value: {id: 10, name: 'MSD1', code: 'MSD1'}});
    this.years.push({label: 'MSD2', value: {id: 11, name: 'MSD2', code: 'MSD2'}});
    this.years.push({label: 'MSI1', value: {id: 12, name: 'MSI1', code: 'MSI1'}});
    this.years.push({label: 'MSI2', value: {id: 13, name: 'MSI2', code: 'MSI2'}});
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

  sendInformation1() {
    if(this.checkSerie() || this.checkSelectedYear())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display1 = false;
    }
  }

  showDialog2() {
    this.display2 = true;
  }

  sendInformation2() {
    if(this.checkSerie() || this.checkSelectedYear() || this.checkAn() ||
        this.checkSelectedCourse() || this.checkAccept())
      this.showDialogError();
    else {
      this.showDialogSuccess();
      this.display2 = false;
    }
    //serie, selectedYear, an, selectedCourse, accept
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

}
