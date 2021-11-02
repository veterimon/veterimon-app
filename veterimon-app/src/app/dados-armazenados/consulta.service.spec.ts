import { TestBed } from '@angular/core/testing';

import { ConsultaInternaService } from '../dados-armazenados/consulta.service';

describe('ConsultaInternaService', () => 
  {
    // ATRIBUTOS
    let service: ConsultaInternaService;

    // MÉTODOS
    beforeEach(() => 
      {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConsultaInternaService);
      }
    );
    it('should be created', () => 
      {
        expect(service).toBeTruthy();
      }
    );
  }
);
