import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TreeNode} from 'primeng/primeng';

@Injectable()
export class NodeService {

    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('app/resources/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data)
                    .then(data => data )
                    .then(data => { return data; });
    }
}
