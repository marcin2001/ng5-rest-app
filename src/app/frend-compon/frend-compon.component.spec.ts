import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrendComponComponent } from './frend-compon.component';

describe('FrendComponComponent', () => {
  let component: FrendComponComponent;
  let fixture: ComponentFixture<FrendComponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrendComponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrendComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
