import {Component, OnInit} from '@angular/core';
import {Patient} from "../Patient";
import {HospitalServiceService} from "../hospital-service.service";
import {Router} from "@angular/router";
import {Observable, of, take} from "rxjs";

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
  patient: Patient = new Patient();
  patients: Patient[] = [];
  private message: string;
  public isDirty = true;
  buttonType = false;
  applicationNo: number;
  public todate = new Date("01-01-1900");
  memberId: number;
  length: number;
  public isLimited = true;
  public AgeValid = true;
  constructor(private service: HospitalServiceService, private route: Router) {
    this.service.getlastApplicationNo().subscribe(data => {
      this.applicationNo = data + 1;
      this.patient.applicationNo = this.applicationNo;

    });

  }

  ngOnInit(): void {
    this.patient.memberId = 1;
  }

  onSubmit(userForm: any) {
    // alert(this.patient.applicationNo);
    // this.service.addPatient(this.patient).subscribe(data=>{this.message=data});
    // this.route.navigate(['/PatientList']).then(()=>{window.location.reload()});
    if (userForm.valid) {
      if (this.buttonType) {
        if (((this.ageFromDateOfBirthday(this.patient.dob) < 0 || (this.ageFromDateOfBirthday(this.patient.dob) > 125)))) {
          this.AgeValid = false;
        }
        this.patient.applicationNo = this.applicationNo;
        if (this.isLimited && this.AgeValid) {
          this.patients.push(this.patient);
        }
        if (this.patient.memberId == 5) {
          this.isLimited = false;
          alert("Maximum household members: 5");
        }
        else if (((this.ageFromDateOfBirthday(this.patient.dob) < 0 || (this.ageFromDateOfBirthday(this.patient.dob) > 125)))) {
          alert("Age is invalid");
        } else {
          this.memberId = this.patient.memberId;
          this.patient = new Patient();
          this.patient.memberId = this.memberId + 1;
          this.patient.applicationNo = this.applicationNo + 1;
          userForm.reset();
          userForm.submitted = false;
        }
      } else {
        for (let i = 0; i < this.patients.length; i++) {
          this.service.addPatient(this.patients[i]).subscribe(data => {
            this.message = data
          });
        }
        this.route.navigate(['/list']).then(() => {
          window.location.reload()
        });
      }
    } else {
      if (this.buttonType) {
        alert("Please fill all the information");
      } else {
        console.log(this.patients.length);
        for (let i = 0; i < this.patients.length; i++) {
          this.service.addPatient(this.patients[i]).subscribe(data => {
            this.message = data
          });
        }
        this.route.navigate(['/list']).then(() => {
          window.location.reload()
        });
      }

    }

  }

  onAddClick() {
    this.buttonType = true;
  }

  onSaveClick() {
    this.buttonType = false;
  }

  getGender(g: string): boolean {
    if (g == "")
      return true;
    else
      return false;
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


}
