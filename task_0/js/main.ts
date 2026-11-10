export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ali",
  lastName: "Aliyev",
  age: 20,
  location: "Baku"
};

const student2: Student = {
  firstName: "Leyla",
  lastName: "Mammadova",
  age: 22,
  location: "Ganja"
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const cellFirstName: HTMLTableCellElement = document.createElement("td");
  const cellLocation: HTMLTableCellElement = document.createElement("td");

  cellFirstName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
