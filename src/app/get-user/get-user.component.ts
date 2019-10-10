import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedUserIdForView, getSelectedUser } from 'src/_shared/state/User/selectors';
import { User } from 'src/_shared/state/User/model';
import { LoadUser } from 'src/_shared/state/User/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {

  user$: Observable<User> = this.store.select(getSelectedUser);

  constructor(private route: ActivatedRoute, private store: Store<User>) { }

  ngOnInit() {
    var param: any = this.route.params;
    this.store.dispatch(new LoadUser(param._value.id));
  }

}
