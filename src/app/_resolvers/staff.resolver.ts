import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Staff } from '../_models/staff';

@Injectable()
export class StaffResolver implements Resolve<Staff> {
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
  ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Staff> {
        return this.userService.getAttendants().pipe (
            catchError(() => {
                this.alertify.error('Problem Retrieving Data');
                return of(null);
            })
        );
    }
}
