import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { getUsers } from 'src/_shared/state/User/selectors';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { User } from 'src/_shared/state/User/model';
import { LoadUsers, DeleteUser } from 'src/_shared/state/User/actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  users$: Observable<User[]> = this.store.select(getUsers);
  // dataSource: any;
  paging: {
    page: 0,
    pageSize: 0,
    length: 0,
    total_pages: 0,
  };
  displayedColumns: string[] = [
    "id",
    "avatar",
    "email",
    "first_name",
    "last_name",
    "operations"
  ];
  dataSource = new MatTableDataSource<User[]>([]);

  constructor(private store: Store<User>, public router: Router) {
    this.store.dispatch(new LoadUsers({ pageIndex: 1 }));
  }

  ngOnInit() {
    this.users$.subscribe((users: any) => {
      if (!users.data) return false;
      this.dataSource = new MatTableDataSource<User[]>(users.data);

      this.paging = {
        ...this.paging,
        page: users.paging.page || 0,
        pageSize: users.paging.per_page || 0,
        length: users.paging.total || 0,
        total_pages: users.paging.total_pages || 0,
      }
    })
  }

  onDelete(id) {
    this.store.dispatch(new DeleteUser(id));
  }

  onPage(eventData) {
    // length: 12
    // pageIndex: 1
    // pageSize: 6
    // previousPageIndex: 0
    this.store.dispatch(new LoadUsers({ pageIndex: eventData.pageIndex + 1 }));
  }

}
