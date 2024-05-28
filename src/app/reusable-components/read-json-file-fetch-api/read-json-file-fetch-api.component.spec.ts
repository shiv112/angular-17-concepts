import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFileFetchApiComponent } from './read-json-file-fetch-api.component';

describe('ReadJsonFileFetchApiComponent', () => {
  let component: ReadJsonFileFetchApiComponent;
  let fixture: ComponentFixture<ReadJsonFileFetchApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadJsonFileFetchApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadJsonFileFetchApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
