import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class announceService{
  private nodeNameAnnounce : Subject<any> = new Subject<String>();
  nodeAnnounce$ =this.nodeNameAnnounce.asObservable();

  constructor(private http: Http) {}

  changeNode(nodeName :any){
    this.nodeNameAnnounce.next(nodeName);
  }

}
