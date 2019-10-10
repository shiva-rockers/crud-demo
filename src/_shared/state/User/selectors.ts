import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUsersState = createFeatureSelector<any>("users");

export const getUsers = createSelector(
    getUsersState,
    state => {
        return state
    }
)

export const getSelectedUser = createSelector(
    getUsersState,
    state => {
        return state.selectedUser
    }
)

export const selectedUserIdForEdit = createSelector(
    getUsersState,
    state => {
        return state.editUserId
    }
)

export const selectedUserIdForView = createSelector(
    getUsersState,
    state => {
        return state.viewUserId
    }
)

export const selectedUserIdForDelete = createSelector(
    getUsersState,
    state => {
        return state.deleteUserId
    }
)
export const getError = createSelector(
    getUsersState,
    state => state.error
)
export const isLoading = createSelector(
    getUsersState,
    state => state.loading
)