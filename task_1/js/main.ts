export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
