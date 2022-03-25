import { TestBed } from '@angular/core/testing';

import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';

describe('CursosService', () => {
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
