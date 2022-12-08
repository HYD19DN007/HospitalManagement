import {Pipe, PipeTransform} from "@angular/core";

import {Patient} from "../Patient";

@Pipe

({
  name: 'searchUser'
})

export class searchPipe implements PipeTransform {

  transform(patients: Patient[], firstName: string, lastName: string, applicationNo: number, dob:Date): Patient[] {

    if (!patients) return [];

    if (firstName) {

      patients = patients.filter((user) => (user.firstName.toLowerCase().includes(firstName.toLowerCase())));

    }
    if (lastName) {
      patients = patients.filter((user) => (user.lastName.toLowerCase().includes(lastName.toLowerCase())));
    }
    if (applicationNo) {
      patients = patients.filter((user) => (user.applicationNo == applicationNo));
    }
    if (dob) {
      patients = patients.filter((user) => (user.dob.toString().includes(dob.toString())));
    }
    return patients;

  }


}
