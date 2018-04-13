import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyComponComponent } from './family.component';

describe('FamilyComponComponent', () => {
  let component: FamilyComponComponent;
  let fixture: ComponentFixture<FamilyComponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyComponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
