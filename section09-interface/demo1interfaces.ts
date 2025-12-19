interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
let employee1: Employee = {
    id: 101,
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 75000
};

interface Manager{
    id: number;
    name: string;
    department?: string;
}
let manager: Manager = {
    id: 201,
    name: "Bob Smith"
};