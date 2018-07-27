import { TestBed, inject } from '@angular/core/testing';

import { Category.ServiceService } from './category.service.service';

describe('Category.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Category.ServiceService]
    });
  });

  it('should be created', inject([Category.ServiceService], (service: Category.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
