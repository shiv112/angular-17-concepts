import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFileImportStatementComponent } from './read-json-file-import-statement.component';

describe('ReadJsonFileImportStatementComponent', () => {
  let component: ReadJsonFileImportStatementComponent;
  let fixture: ComponentFixture<ReadJsonFileImportStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadJsonFileImportStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadJsonFileImportStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
