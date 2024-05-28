import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReadJsonFileImportStatementComponent } from './reusable-components/read-json-file-import-statement/read-json-file-import-statement.component';
import { ReadJsonFileHttpclientComponent } from './reusable-components/read-json-file-httpclient/read-json-file-httpclient.component';
import { ReadJsonFileFetchApiComponent } from './reusable-components/read-json-file-fetch-api/read-json-file-fetch-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReadJsonFileImportStatementComponent,
    ReadJsonFileHttpclientComponent,ReadJsonFileFetchApiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'default-angular17';
}
