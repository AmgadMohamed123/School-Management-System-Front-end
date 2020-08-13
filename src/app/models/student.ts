import { Level } from './level';
import { Grade } from './grade';
import { Guardian } from './guardian';

export class Student {

    id:number;
    name:string;
    age:number;
    gender:string;
    email:string;
    dob:Date;
    joinDate:Date;
    paidFees:number;
    remainFees:number;
    status:string;
    address:string;
    ssn:string;
    phoneNumber:string;
    level:Level;
    guardian:Guardian;
}
