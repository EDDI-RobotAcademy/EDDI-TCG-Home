import type { AuthProvider } from '../../domain/model/AuthProvider';

export type LoginCommand = () => void;

export const loginCommands: Record<AuthProvider, LoginCommand> = {
    GOOGLE: () => alert('구글 계정 로그인 페이지 이동'),
    KAKAO: () => alert('카카오 계정 로그인 페이지 이동'),
    NAVER: () => alert('네이버 계정 로그인 페이지 이동')
};