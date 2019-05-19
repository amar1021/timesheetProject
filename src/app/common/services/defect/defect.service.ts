import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Defect } from 'app/common/pojo/defect';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DefectService {

  constructor(private http: HttpClient) { }

  public getDefectList():Observable<Defect[]>{
    return this.http.get<Defect[]>("/assets/mock_json/defect_list.json");
  }

}
