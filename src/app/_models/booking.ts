import { User } from './user';
import { Payment } from './payment';

export interface Booking {
    id: number;
    bookingEmail: string;
    contactNumber: string;
    bookingDate: Date;
    bookingTime: string;
    createdBy: User;
    bookingType: string;
    facility: string;
    attendees: string;
    requirements: string;
}
