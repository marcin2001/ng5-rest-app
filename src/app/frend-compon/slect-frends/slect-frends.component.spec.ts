import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectFrendsComponent } from './slect-frends.component';

describe('SlectFrendsComponent', () => {
  let component: SlectFrendsComponent;
  let fixture: ComponentFixture<SlectFrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlectFrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlectFrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
