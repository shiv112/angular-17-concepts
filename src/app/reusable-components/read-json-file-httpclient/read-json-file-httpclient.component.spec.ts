import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFileHttpclientComponent } from './read-json-file-httpclient.component';

describe('ReadJsonFileHttpclientComponent', () => {
  let component: ReadJsonFileHttpclientComponent;
  let fixture: ComponentFixture<ReadJsonFileHttpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadJsonFileHttpclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadJsonFileHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
