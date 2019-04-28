import { Booking } from './booking';
import { Payment } from './payment';
import { Order } from './order';

export interface User {
    id: number;
    email: string;
    firstName: string;
    surname: string;
    addressLine1: string;
    addressLine2: string;
    town: string;
    postCode: string;
    dateOfBirth: Date;
    membershipType?: string;
    membershipExpiry?: Date;
    bookings?: Booking[];
    payments?: Payment[];
    orders?: Order[];


}
