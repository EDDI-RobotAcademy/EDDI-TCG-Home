// 아무것도 안 한 상태/로그인 요청 진행 중/로그인 성공/로그인 실패
export type LoginStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAIL';

export interface LoginState {
    status: LoginStatus;
}