import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMemberComponent } from './selected-member.component';

describe('SelectedMemberComponent', () => {
  let component: SelectedMemberComponent;
  let fixture: ComponentFixture<SelectedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
