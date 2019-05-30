import { Staff } from './staff';
import { Booking } from './booking';

export interface Class {
    id: number;
    className: string;
    classDate: Date;
    classTime: string;
    maxAttendees: number;
    totalAttendees: number;
    facility: string;
    cost: number;
    attendant: Staff;
    bookings: Booking[];
}
