import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReactiveFormComponent } from './register-reactive-form.component';

describe('RegisterReactiveFormComponent', () => {
  let component: RegisterReactiveFormComponent;
  let fixture: ComponentFixture<RegisterReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
