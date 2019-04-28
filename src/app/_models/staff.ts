import { Class } from './class';

export interface Staff {
    id: number;
    email: string;
    firstName: string;
    surname: string;
    addressLine1: string;
    addressLine2: string;
    town: string;
    postCode: string;
    dateOfBirth: Date;
    hireDate: Date;
    role: string;
    classes: Class[];
}
