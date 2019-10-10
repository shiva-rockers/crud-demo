import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/_shared/state/User/model';
import { AddUser } from 'src/_shared/state/User/actions';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('shiva.rockers@gmail.com', [Validators.required]),
    first_name: new FormControl('Shivam', [Validators.required]),
    last_name: new FormControl('Mishra', [Validators.required]),
  });

  avatars = ["https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"]

  constructor(private store: Store<User>) { }

  ngOnInit() {
  }

  getErrorMessage(param) {
    return this.userForm.get(param).hasError('required') ? 'You must enter a value' : '';
  }

  onClickCreateUser() {
    if (this.userForm.invalid) return false;
    this.userForm.value.avatar = this.avatars[Math.floor(Math.random() * this.avatars.length - 1) + 0];
    this.store.dispatch(new AddUser(this.userForm.value));
  }

}
