import { TestBed } from '@angular/core/testing';

import { BaseRecetteService } from './base-recette.service';

describe('BaseRecetteService', () => {
  let service: BaseRecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
