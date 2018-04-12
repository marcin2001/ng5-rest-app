import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listFrendssComponent } from './list-frends.component';

describe('listFrendssComponent', () => {
  let component: listFrendssComponent;
  let fixture: ComponentFixture<listFrendssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listFrendssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listFrendssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
