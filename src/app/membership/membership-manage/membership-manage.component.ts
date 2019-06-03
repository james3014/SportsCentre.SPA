import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { of } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-membership-manage',
  templateUrl: './membership-manage.component.html',
  styleUrls: ['./membership-manage.component.css']
})
export class MembershipManageComponent implements OnInit {
  user: User;

  constructor(private dataService: DataService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {
   this.user = JSON.parse(localStorage.getItem('user'));
   console.log(this.user);
  }

  cancelMembership() {
    this.dataService.cancelMembership(this.user.id).subscribe(() => {
      this.alertify.success('Membership Cancelled');
      this.user.membershipType = '';
      this.user.membershipExpiry = null;
      this.router.navigate(['']);
    }, error => {
      this.alertify.error('Membership Cancel Failed - Please Contact Us Below');
    }, () => {
      this.router.navigate(['/membership/cancel']);
    });
  }
}
