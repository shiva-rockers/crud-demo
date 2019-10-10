import { UserActionTypes, UserActions } from "./actions";
import { User } from './model';

interface State {
    data: User[] | null;
    paging: any;
    error: string | null;
    loading: boolean;
    selectedUser: User
}

const initialState: State = {
    data: [],
    error: null,
    paging: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
    },
    loading: false,
    selectedUser: null
};

export function UserReducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case UserActionTypes.ADD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UserActionTypes.LOAD_USERS:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                data: [...action.payload.data],
                paging: {
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    total: action.payload.total,
                    total_pages: action.payload.total_pages,
                },
                loading: false,
            }
        case UserActionTypes.LOAD_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UserActionTypes.LOAD_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                selectedUser: action.payload,
                loading: false,
            }
        case UserActionTypes.LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UserActionTypes.EDIT_USER_SUCCESSS:
            return {
                ...state,
                loading: false,
            }
        case UserActionTypes.DELETE_USER_SUCCESSS:
            const data = state.data.filter(d => d.id !== action.payload);
            return {
                ...state,
                data: [...data],
                loading: false,
            }
        default: return state;
    }
}