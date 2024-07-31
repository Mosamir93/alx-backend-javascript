interface Teacher {
    [key: string]: any;
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherfunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherfunction = (first, last) => {
    return `${first[0]}. ${last}`;
};
console.log(printTeacher("John", "Doe"));

interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string,
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
