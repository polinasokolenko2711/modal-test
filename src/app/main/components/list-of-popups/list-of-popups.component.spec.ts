import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPopupsComponent } from './list-of-popups.component';

describe('ListOfPopupsComponent', () => {
  let component: ListOfPopupsComponent;
  let fixture: ComponentFixture<ListOfPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
