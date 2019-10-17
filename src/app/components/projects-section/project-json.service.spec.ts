import { TestBed } from '@angular/core/testing';

import { ProjectJSONService } from './project-json.service';

describe('ProjectJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectJSONService = TestBed.get(ProjectJSONService);
    expect(service).toBeTruthy();
  });
});
