import { User } from "./user";
import { Vehicle } from "./vehicle";

export interface Booking {
    _id: string
    user: User
    vehicle: Vehicle
    startDate: Date;
    endDate: Date;
    price: number
    discount: number
}
