import {Component, OnInit} from '@angular/core';
import {Patient} from "../Patient";
import {HospitalServiceService} from "../hospital-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  firstName = '';
  lastName = '';
  applicationNo:number;
  patients: Patient[];
  dob:Date;
  constructor(private service: HospitalServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getPatients().subscribe(data => {
      this.patients = data
    });
  }
 
}
