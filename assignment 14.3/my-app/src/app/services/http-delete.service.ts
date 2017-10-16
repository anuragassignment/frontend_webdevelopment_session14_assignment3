import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpDeleteService {
  idArr = [];
  public baseUrl = 'https://acadgild-ng-http.firebaseio.com';

  constructor(private http: Http) {
    console.log(this.idArr);
  }

  gtData() {
    return this.http.get(`${this.baseUrl}/data.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  convert(pasrsedResponse) {
    return Object.keys(pasrsedResponse).map(
      id => (id)
    );
  }

  removeDt() {
    return this.http.delete(`https://acadgild-ng-http.firebaseio.com/data/${this.idArr[0]}.json`).toPromise().catch(
      (error: Response) => {
        return Observable.throw(error);
      }
      );  }
}
