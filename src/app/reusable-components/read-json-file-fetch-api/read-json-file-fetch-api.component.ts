import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'read-json-file-fetch-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-json-file-fetch-api.component.html',
  styleUrl: './read-json-file-fetch-api.component.scss'
})
export class ReadJsonFileFetchApiComponent {

  employeeData:any;
  
  constructor(){}

  ngOnInit(){
    fetch("assets/employees.json").then((response)=>
      this.employeeData = response
    )

    // fetch('assets/employees.json').then(res => res.json())
    // .then(jsonData => {
    //   this.employeeData = jsonData;
    // });
  }

}
