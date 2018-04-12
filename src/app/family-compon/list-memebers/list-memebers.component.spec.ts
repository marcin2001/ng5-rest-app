import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemebersComponent } from './list-memebers.component';

describe('ListMemebersComponent', () => {
  let component: ListMemebersComponent;
  let fixture: ComponentFixture<ListMemebersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMemebersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemebersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
