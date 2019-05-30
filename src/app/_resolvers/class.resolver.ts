import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Class } from '../_models/class';
import { DataService } from '../_services/data.service';

@Injectable()
export class ClassResolver implements Resolve<Class[]> {
  constructor(
    private alertify: AlertifyService,
    private dataService: DataService
  ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Class[]> {
        return this.dataService.getClasses().pipe (
            catchError((error) => {
                this.alertify.error('Problem Retrieving Data');
                return of(null);
            })
        );
    }
}
