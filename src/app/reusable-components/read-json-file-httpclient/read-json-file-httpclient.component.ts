import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'read-json-file-httpclient',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './read-json-file-httpclient.component.html',
  styleUrl: './read-json-file-httpclient.component.scss'
})
export class ReadJsonFileHttpclientComponent {

  employeeData:any;
  
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get<any>("assets/employees.json").subscribe((response)=>
      this.employeeData = response
    )
  }

}
