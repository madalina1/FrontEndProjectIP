import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { Document } from '../../model/Document.model';


@Component({
  selector: 'history-page',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements  OnInit {

  public documentArray = Array<Document>();
  public id: string;

  constructor(private _httpService: HistoryService) {
  }

  ngOnInit() {

    this.id = "17";
    this._httpService.getListOfStudentHistory(this.id)
      .subscribe(
        (data) => this.getStudentList(data),
        (err) => this.showError()
      );
  }

  getStudentList(responseData: any) {
    for (let index in responseData) {
      console.log(responseData[index].valabilityInDays);


    }

  }


  showError() {
    console.log("Can't fetch data from");
  }


}