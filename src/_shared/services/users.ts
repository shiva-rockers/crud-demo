import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

declare const localStorage: any;

@Injectable({
    providedIn: 'root'
})

export class UserService {

    url: string = environment.url;

    constructor(private http: HttpClient) { }


    listUsers(paging) {
        let url = this.url + '/users?page=' + (paging ? paging.pageIndex : 1);
        return this.http.get(url);
    }

    addUser(data) {
        let url = this.url + '/users';
        return this.http.post(url, data);
    }

    getUser(id) {
        let url = this.url + '/users/' + id;
        return this.http.get(url);
    }

    editUser(data) {
        let url = this.url + '/users/' + data.id;
        return this.http.put(url, data);
    }

    deleteUser(id) {
        let url = this.url + '/users/' + id;
        return this.http.delete(url).pipe(map((response) => response = id));
    }
}