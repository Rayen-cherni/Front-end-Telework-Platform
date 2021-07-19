import { Role } from "./role";
import { UserStatus } from "./userStatus";
import { WithHoldingStatus } from "./withHoldingStatus";

export class PoleManager {
    id: number;
    poleName: string;
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
    phone: string;
    address: string;
    userStatus: UserStatus;
    withHoldingStatus: WithHoldingStatus;

    constructor(id: number, firstname: string, lastname: string, phone: string, email: string, address: string, poleName: string, userStatus: UserStatus) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.poleName = poleName;
        this.userStatus = userStatus;

    }
}