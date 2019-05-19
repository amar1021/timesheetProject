import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtResponse } from "../common/pojo/jwt-response";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
    providedIn: "root"
})

export class AuthService {
    private loginUrl = 'http://localhost:8084/login/getToken';

    constructor(private http: HttpClient){

    }
    attempAuth(credentials: any): Observable<JwtResponse>{
        console.dir("cre: "+credentials);
        return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }
}