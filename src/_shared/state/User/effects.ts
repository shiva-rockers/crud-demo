import { Injectable } from "@angular/core";
import { Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import {
    UserActions,
    UserActionTypes,
    AddUserSuccess,
    AddUserFail,
    LoadUserSuccess,
    LoadUserFail,
    LoadUsersSuccess,
    LoadUsersFail,
    EditUserSuccess,
    EditUserFail,
    DeleteUserSuccess,
    DeleteUserFail,
} from './actions';
import { UserService } from 'src/_shared/services/users';
import { Router } from '@angular/router';
import { MaterialService } from 'src/_shared/material/material.service';
import { Store } from '@ngrx/store';

type Action = UserActions
@Injectable()
export class UserEffect {

    @Effect()
    addUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.ADD_USER),
        switchMap((action: any) => this.userService.addUser(action.payload).pipe(
            map((response: any) => {
                this.materialService.snackOpen("Users created successfully", "success");
                return new AddUserSuccess(response);
            }),
            catchError(error => {
                this.materialService.snackOpen("Users creation failed", "error");
                return of(new AddUserFail(error))
            })
        )),
    );

    @Effect()
    loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.LOAD_USERS),
        switchMap((action: any) => this.userService.listUsers(action.payload).pipe(
            map((response: any) => response),
            map((response: any) => {
                this.materialService.snackOpen("Users loaded successfully", "success");
                return new LoadUsersSuccess(response);
            }),
            catchError(error => {
                this.materialService.snackOpen("Users loading failed", "error");
                return of(new LoadUsersFail(error))
            })
        )),
    );

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.LOAD_USER),
        switchMap((action: any) => this.userService.getUser(action.payload).pipe(
            map((response: any) => response.data),
            map((response: any) => {
                this.materialService.snackOpen("User loaded successfully", "success");
                return new LoadUserSuccess(response);
            }),
            catchError(error => {
                this.materialService.snackOpen("User loading failed", "error");
                this.router.navigate(['']);
                return of(new LoadUserFail(error))
            })
        )),
    );

    @Effect()
    editUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.EDIT_USER),
        switchMap((action: any) => this.userService.editUser(action.payload).pipe(
            map((response: any) => response.data),
            map((response: any) => {
                this.materialService.snackOpen("User edited successfully", "success");
                return new EditUserSuccess(response);
            }),
            catchError(error => {
                this.materialService.snackOpen("User edition faild", "error");
                this.router.navigate(['']);
                return of(new EditUserFail(error))
            })
        )),
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.DELETE_USER),
        switchMap((action: any) => this.userService.deleteUser(action.payload).pipe(
            map((response: any) => response),
            map((response: any) => {
                this.materialService.snackOpen("User deleted successfully", "success");
                return new DeleteUserSuccess(response)
            }),
            catchError(error => {
                this.materialService.snackOpen("User deletopn faild", "error");
                return of(new DeleteUserFail(error))
            })
        )),
    );

    constructor(private actions$: Actions, private userService: UserService, private router: Router, private materialService: MaterialService) { }
}