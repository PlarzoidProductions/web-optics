import { TestBed, inject } from '@angular/core/testing';

import { GameSystemsService } from './game-systems.service';

describe('GameSystemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSystemsService]
    });
  });

  it('should be created', inject([GameSystemsService], (service: GameSystemsService) => {
    expect(service).toBeTruthy();
  }));
});
