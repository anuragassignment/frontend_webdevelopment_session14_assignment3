import { Injectable } from '@angular/core';
import { ICourseModel } from '../interface/course-model';
import { HttpPostService } from './http-post.service';
import { HttpGetService } from './http-get.service';
import { HttpDeleteService } from './http-delete.service';

// HTTP Delete service to delete the data as per the ID of the data.

@Injectable()
export class DropDownService {
  courses: ICourseModel[] = [
    { course: 'Mobile Development' },
    { course: 'Web Development' },
    { course: 'IOS Development' },
    { course: 'Android Development' }
  ];
  id: string[];
  coursesDt: any = this.httpGet.getData();


  private setDt() {
    this.httpSer.storeData(this.courses).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); });
  }

  private getDt() {
    this.httpGet.getData().subscribe(
      (response) => { this.coursesDt = response; },
      (error) => { console.log(error); });
  }

  getData() {
    return this.courses;
  }

  setData(obj: { course: string }) {
    this.courses.unshift(obj);
  }
  constructor(private httpSer: HttpPostService, private httpGet: HttpGetService, private dlt: HttpDeleteService) {
    this.setDt();
    // this.getDt();
    console.log(this.coursesDt);
    this.dlt.gtData().then(id => { this.dlt.idArr.push(...id); }).then(() => {
      this.dlt.removeDt().then(() => console.log('ran'));
  });
  }
}