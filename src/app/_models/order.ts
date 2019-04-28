import { Item } from './item';

export interface Order {
    id: number;
    orderDate: Date;
    items: Item[];
    total: number;
}
