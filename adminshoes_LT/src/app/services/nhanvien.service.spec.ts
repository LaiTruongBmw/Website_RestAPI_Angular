import { TestBed, inject } from '@angular/core/testing';

import { NhanvienService } from './nhanvien.service';

describe('NhanvienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhanvienService]
    });
  });

  it('should be created', inject([NhanvienService], (service: NhanvienService) => {
    expect(service).toBeTruthy();
  }));
});
