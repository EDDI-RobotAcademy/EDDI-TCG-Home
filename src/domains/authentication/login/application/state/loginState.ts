import type { LoginModel } from '../../domain/model/loginModel';

export type LoginStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAIL';

export interface LoginState {
    status: LoginStatus;
    model: LoginModel;
}