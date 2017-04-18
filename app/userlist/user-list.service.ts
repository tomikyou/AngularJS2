import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../models/entries.model';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium(nodename:any) {
      if(nodename==" staff"){
        return this.http.get('app/resources/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
      }else if(nodename=="Team"){
        return this.http.get('app/resources/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data2)
                    .then(data => { return data; });
      }else{
        return this.http.get('app/resources/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
      }

   }
}
