import { TestBed } from '@angular/core/testing';

import { DadosConsultaService } from './dados-consulta.service';

describe('DadosConsultaService', () => {
  let service: DadosConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
