import { User } from './user';

export interface Payment {
    id: number;
    type: string;
    amount: number;
    paymentDate: Date;
    paidBy: User;
}
