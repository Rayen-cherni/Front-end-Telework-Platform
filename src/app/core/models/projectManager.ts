import { Role } from "./role";
import { UserStatus } from "./userStatus";
import { WithHoldingStatus } from "./withHoldingStatus";

export class ProjectManager{
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
    phone: string;
    address: string;
    userStatus: UserStatus;
    withHoldingStatus: WithHoldingStatus;
    projects: string[];

    constructor(id: number, firstname: string, lastname: string, phone: string, email: string, address: string, projects: string[], userStatus: UserStatus) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.projects = projects;
        this.userStatus = userStatus;

    }
} 