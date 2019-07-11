import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalRef } from 'src/app/shared/classes/modal-ref';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [
        CommonModule,
        FormsModule
      ],
      providers: [{provide: ModalRef}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get fullname', () => {
    component.name = 'Name';
    component.lastname = 'Lastname';
    expect(component.setFullName()).toBe('Name Lastname');
  });

  it('should get fullname', () => {
    expect(component.setFullName()).toBe('User');
  });
});


@Component({
  template: `<app-user-form >
             </app-user-form>`
})
class TestHostComponent {
}

describe('UserFormComponent: template', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ UserFormComponent, TestHostComponent ], 
      providers: [{provide: ModalRef}]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('default render', () => {
    it('should render the component', () => {
      const mainComponent = fixture.debugElement.query(By.css('app-user-form'));

      expect(mainComponent).toBeTruthy();
    });

    it('should render the form on component', () => {
      const mainComponent = fixture.debugElement.query(By.css('form.form'));

      expect(mainComponent).toBeTruthy();
    });

    it('should input has class', () => {
      const input = fixture.debugElement.query(By.css('input.form-control'));

      expect(input).toBeTruthy();
    });

  });

})