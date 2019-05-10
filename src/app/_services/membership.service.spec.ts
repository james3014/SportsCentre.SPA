/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MembershipService } from './membership.service';

describe('Service: Membership', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembershipService]
    });
  });

  it('should ...', inject([MembershipService], (service: MembershipService) => {
    expect(service).toBeTruthy();
  }));
});
