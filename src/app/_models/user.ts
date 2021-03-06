import { Booking } from './booking';
import { Payment } from './payment';
import { Order } from './order';

export interface User {
    id: number;
    userName: string;
    email: string;
    firstName: string;
    surname: string;
    addressLine1: string;
    addressLine2: string;
    town: string;
    postCode: string;
    dateOfBirth: Date;
    dateJoined: Date;
    membershipType?: string;
    membershipExpiry?: Date;
    bookings?: Booking[];
    payments?: Payment[];
    orders?: Order[];
    roles?: string[];
}
