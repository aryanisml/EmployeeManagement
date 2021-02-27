export class Employee {
    id: string;
    empId: string;
    name: string;
    age: number;
    phone: number;
    email: string;
    address: string;
    
    constructor(id: string,
        empId: string,
        name: string,
        age: number,
        phone: number,
        email: string,
        address: string
    ) {
        this.id = id;
        this.empId = empId;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}
