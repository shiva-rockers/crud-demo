import { Action } from '@ngrx/store';
import { User } from './model';

export enum UserActionTypes {
    ADD_USER = "[User] Add",
    ADD_USER_SUCCESS = "[User] Add Success",
    ADD_USER_FAIL = "[User] Add Fail",
    LOAD_USER = "[User] Load",
    LOAD_USER_SUCCESS = "[User] Load Success",
    LOAD_USER_FAIL = "[User] Load Fail",
    LOAD_USERS = "[User] Loads",
    LOAD_USERS_SUCCESS = "[User] Loads Success",
    LOAD_USERS_FAIL = "[User] Loads Fail",
    EDIT_USER = "[User] Edit",
    EDIT_USER_SUCCESSS = "[User] Edit Success",
    EDIT_USER_FAIL = "[User] Edit Fail",
    DELETE_USER = "[User] Delete",
    DELETE_USER_SUCCESSS = "[User] Delete Success",
    DELETE_USER_FAIL = "[User] Delete Fail",
}

export class AddUser implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: any) { }
}

export class AddUserSuccess implements Action {
    readonly type = UserActionTypes.ADD_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class AddUserFail implements Action {
    readonly type = UserActionTypes.ADD_USER_FAIL;
    constructor(public payload: User) { }
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.LOAD_USER;
    constructor(public payload: any) { }
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadUserFail implements Action {
    readonly type = UserActionTypes.LOAD_USER_FAIL;
    constructor(public payload: User) { }
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;
    constructor(public payload: any) { }
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadUsersFail implements Action {
    readonly type = UserActionTypes.LOAD_USERS_FAIL;
    constructor(public payload: User) { }
}

export class EditUser implements Action {
    readonly type = UserActionTypes.EDIT_USER;
    constructor(public payload: any) { }
}

export class EditUserSuccess implements Action {
    readonly type = UserActionTypes.EDIT_USER_SUCCESSS;
    constructor(public payload: any) { }
}

export class EditUserFail implements Action {
    readonly type = UserActionTypes.EDIT_USER_FAIL;
    constructor(public payload: User) { }
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER;
    constructor(public payload: any) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESSS;
    constructor(public payload: any) { }
}

export class DeleteUserFail implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAIL;
    constructor(public payload: User) { }
}


export type UserActions = AddUser
    | AddUserSuccess
    | AddUserFail
    | LoadUser
    | LoadUserSuccess
    | LoadUserFail
    | LoadUsers
    | LoadUsersSuccess
    | LoadUsersFail
    | EditUser
    | EditUserSuccess
    | EditUserFail
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFail


