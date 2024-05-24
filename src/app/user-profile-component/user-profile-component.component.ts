import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-profile-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css',
  providers: [UserService]
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: any;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    console.log('user-profile constructor');
  }

  ngOnInit() {
    console.log('user-profile ngOnInit');
    this.routeSub = this.route.params.subscribe(params => {
      const userId = +params['userId'];
      this.loadUserProfile(userId);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadUserProfile(userId: number) {
    this.userService.getUserById(userId).subscribe(user => {
      this.user = user;
    });
  }
}
