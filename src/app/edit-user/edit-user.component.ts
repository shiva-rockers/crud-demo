import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/_shared/state/User/model';
import { LoadUser, EditUser } from 'src/_shared/state/User/actions';
import { Observable } from 'rxjs';
import { getSelectedUser } from 'src/_shared/state/User/selectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user$: Observable<User> = this.store.select(getSelectedUser);

  userForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
  })


  constructor(private route: ActivatedRoute, private store: Store<User>) { }

  ngOnInit() {
    var param: any = this.route.params;
    this.store.dispatch(new LoadUser(param._value.id));
    this.user$.subscribe(userData => {
      if (userData) this.userForm.patchValue(userData)
    });
  }

  getErrorMessage(param) {
    return this.userForm.get(param).hasError('required') ? 'You must enter a value' : '';
  }


  onClickEditUser() {
    if (this.userForm.invalid) return false;
    this.store.dispatch(new EditUser(this.userForm.value));
  }

}
