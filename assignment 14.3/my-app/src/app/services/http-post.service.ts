import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ICourseModel } from '../interface/course-model';
import { Observable } from 'rxjs/Observable';

// HTTP Post service to post the data to the server. Add Content-type in the header while posting a data
@Injectable()
export class HttpPostService {

  constructor(private http: Http) { }

  storeData(crs: ICourseModel[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://acadgild-ng-http.firebaseio.com/data.json', crs, {headers: headers}).catch(
      (error: Response) => {
        return Observable.throw(error);
      }
    );
  }

}
