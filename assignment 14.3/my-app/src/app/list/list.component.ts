import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InputDataService } from '../services/input-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public personsList;
  @Input() coursestat: string;

  constructor(private getDt: InputDataService) {

  }

  ngOnInit() {
    this.personsList = this.getDt.personArr;
    console.log(this.personsList);
  }

  ngOnDestroy() {
    console.log('destroy list');
  }

}
