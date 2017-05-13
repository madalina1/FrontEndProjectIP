import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  serie: string;
  an: string;
  accept: boolean;

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
    this.examTypes.push({label:'Licenta', value:{id:1, name: 'Licenta', code: 'Licenta'}});
    this.examTypes.push({label:'Disertatie', value:{id:2, name: 'Disertatie', code: 'Disertatie'}});

    this.diplomaTypes = [];
    this.diplomaTypes.push({label:'Diploma de Bacalaureat', value:{id:1, name: 'Diploma de Bacalaureat', code: 'Diploma de Bacalaureat'}});
    this.diplomaTypes.push({label:'Diploma de Licenta', value:{id:2, name: 'Diploma de Licenta', code: 'Diploma de Licenta'}});

    this.studentTypes = [];
    this.studentTypes.push({label:'Student', value:{id:1, name: 'Student', code: 'Student'}});
    this.studentTypes.push({label:'Cursant', value:{id:2, name: 'Cursant', code: 'Cursant'}});

    this.studies = [];
    this.studies.push({label:'Licenta', value:{id:1, name: 'Licenta', code: 'Licenta'}});
    this.studies.push({label:'Master', value:{id:2, name: 'Master', code: 'Master'}});

    this.courses = [];
    this.courses.push({label: 'Cursuri de Zi', value: 'Cursuri de Zi'});
    this.courses.push({label: 'Cursuri de Noapte', value: 'Cursuri de Noapte'});
    this.courses.push({label: 'Cursuri de Pranz', value: 'Cursuri de Pranz'});

    this.years = [];
    this.years.push({label:'INFO1', value:{id:1, name: 'INFO1', code: 'INFO1'}});
    this.years.push({label:'INFO2', value:{id:2, name: 'INFO2', code: 'INFO2'}});
    this.years.push({label:'INFO3', value:{id:3, name: 'INFO3', code: 'INFO3'}});
    this.years.push({label:'MISS1', value:{id:4, name: 'MISS1', code: 'MISS1'}});
    this.years.push({label:'MISS2', value:{id:5, name: 'MISS2', code: 'MISS2'}});
    this.years.push({label:'MLC1', value:{id:6, name: 'MLC1', code: 'MLC1'}});
    this.years.push({label:'MLC2', value:{id:7, name: 'MLC2', code: 'MLC2'}});
    this.years.push({label:'MOC1', value:{id:8, name: 'MOC1', code: 'MOC1'}});
    this.years.push({label:'MOC2', value:{id:9, name: 'MOC2', code: 'MOC2'}});
    this.years.push({label:'MSD1', value:{id:10, name: 'MSD1', code: 'MSD1'}});
    this.years.push({label:'MSD2', value:{id:11, name: 'MSD2', code: 'MSD2'}});
    this.years.push({label:'MSI1', value:{id:12, name: 'MSI1', code: 'MSI1'}});
    this.years.push({label:'MSI2', value:{id:13, name: 'MSI2', code: 'MSI2'}});
  }

  ngOnInit() {
  }

  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  display6: boolean = false;

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

}
