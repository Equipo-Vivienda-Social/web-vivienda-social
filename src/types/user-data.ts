export interface Applicant {
    id: number;
    name: string;
    surname: string;
    dni: string;
    birthDate: Date;
    salary: number;
    familyMenbers: number;
    employed: boolean;
}

export interface Dwelling {
    id: number;
    street: string;
    city: string;
    type: string;
    room: number;
    available: boolean;
    buildDate: string;
    applicants: Applicant;
}