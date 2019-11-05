import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasecountdownComponent } from './firebasecountdown.component';

describe('FirebasecountdownComponent', () => {
  let component: FirebasecountdownComponent;
  let fixture: ComponentFixture<FirebasecountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasecountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasecountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
