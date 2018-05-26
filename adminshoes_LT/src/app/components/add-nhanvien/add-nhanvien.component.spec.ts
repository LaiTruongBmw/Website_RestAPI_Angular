import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNhanvienComponent } from './add-nhanvien.component';

describe('AddNhanvienComponent', () => {
  let component: AddNhanvienComponent;
  let fixture: ComponentFixture<AddNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
