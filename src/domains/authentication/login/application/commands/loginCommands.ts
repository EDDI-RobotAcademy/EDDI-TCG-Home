import type { LoginProvider } from '../../domain/model/loginModel';

export type LoginCommand = () => void;

export const loginCommands: Record<LoginProvider, LoginCommand> = {
    google: () => alert('구글 계정 로그인 페이지 이동'),
    kakao: () => alert('카카오 계정 로그인 페이지 이동'),
    naver: () => alert('네이버 계정 로그인 페이지 이동')
};