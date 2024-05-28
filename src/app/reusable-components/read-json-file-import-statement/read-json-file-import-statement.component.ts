import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
//import employees from 'E:/target-developers-2024/read-json-different-ways/read-json-different-ways/src/assets/employees.json';
@Component({
  selector: 'read-json-file-import-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-json-file-import-statement.component.html',
  styleUrl: './read-json-file-import-statement.component.scss'
})
export class ReadJsonFileImportStatementComponent {

  employeeData: any;

  constructor() {
    //this.employeeData = employees;
  }

  ngOnInit() {
  
  }

}
