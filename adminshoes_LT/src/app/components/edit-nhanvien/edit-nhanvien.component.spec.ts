import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNhanvienComponent } from './edit-nhanvien.component';

describe('EditNhanvienComponent', () => {
  let component: EditNhanvienComponent;
  let fixture: ComponentFixture<EditNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
