import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./Patient";
@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {

  private baseurl = "http://localhost:9090/"
  constructor(private http:HttpClient) { }
  getPatients():Observable<Patient[]>
  {
    return this.http.get<Patient[]>(this.baseurl + "getPatients");
  }
  addPatient(patient:Patient):Observable<string> {
    return this.http.post<string>(this.baseurl + "addPatient", patient);
  }
  getlastApplicationNo():Observable<number>
  {
    return this.http.get<number>(this.baseurl + "getApplicationNo");
  }
}
