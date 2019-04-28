import { Staff } from './staff';
import { Booking } from './booking';

export interface Class {
    id: number;
    className: string;
    classDate: Date;
    maxAttendees: number;
    totalAttendees: number;
    attendant: Staff;
    bookings: Booking[];
}
