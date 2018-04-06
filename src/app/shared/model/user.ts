export class User {

    name: string;
    email: string;
    mobile: number;
    password: string;


    constructor(
        name: string,
        email: string,
        password: string,
        mobile?: number) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
    }
}
