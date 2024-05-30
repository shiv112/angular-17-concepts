import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'read-json-file-import-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-json-file-import-statement.component.html',
  styleUrl: './read-json-file-import-statement.component.scss'
})

export class ReadJsonFileImportStatementComponent {

  "employees": [
    {
      "id": "1",
      "firstName": "shivam",
      "lastName": "sahu"
    },
    {
      "id": "2",
      "firstName": "puneet",
      "lastName": "viswkarma"
    },
    {
      "id": "3",
      "firstName": "James",
      "lastName": "Bond"
    }
  ]
  
  employeeData: any;

  constructor() {
  }

  ngOnInit() {
    this.employeeData = this.employees;
  }

}
