import { Level } from './level';

export class Teacher {
    id:number;
    name:string;
    age:number;
    address:string;
    specialization:string;
    phoneNumber:string;
    email:string;
    ssn:string;
    maritalStatus:string;
    gender:string;
    yearsOfExperience:number;
    birthDate:Date;
    hireDate:Date;
    salary:number;
    degree:string;
    qualification:string;
    subject:string;
    // level:string;
        // models for other shared tables
    levels:Level[];

}
