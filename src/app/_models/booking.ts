import { User } from './user';
import { Payment } from './payment';

export interface Booking {
    id: number;
    bookingName: string;
    bookingDate: Date;
    createdBy: User;
    bookingType: string;
    paymentDetail: Payment;
}
