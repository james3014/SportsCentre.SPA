import { User } from './user';
import { Payment } from './payment';

export interface Booking {
    id: number;
    bookingName: string;
    bookingDate: Date;
    contactNumber: string;
    createdBy: User;
    facility: string;
    requirements: string;
    paymentDetail: Payment;
}
