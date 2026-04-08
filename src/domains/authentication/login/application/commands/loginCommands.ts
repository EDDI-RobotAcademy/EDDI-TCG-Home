import type { AuthProvider } from '../../domain/model/AuthProvider';
import { authApi } from '../../infrastructure/api/authApi'

export type LoginCommand = () => Promise<void>;

// 로그인 url로 이동
async function redirectToOAuthLogin(provider: AuthProvider) {
    try {
        const loginUrl = await authApi.getLoginUrl(provider);

        console.log('loginUrl:', loginUrl);

        if (!loginUrl) {
            throw new Error('로그인 URL 없음');
        }

        window.location.href = loginUrl;
    } catch (e) {
        console.error('에러 발생:', e);
    }
}

async function loginWithOAuthCode(provider: AuthProvider, code: string) {
    const data = await authApi.exchangeCodeForToken(provider, code);

    const token = data?.accessToken;

    if (!token) {
        throw new Error('토큰 없음');
    }

    localStorage.setItem('userToken', token);
}

export const loginCommands = {
    GOOGLE: {
        start: () => redirectToOAuthLogin('GOOGLE'),
        finish: (code: string) => loginWithOAuthCode('GOOGLE', code),
    },
    KAKAO: {
        start: () => redirectToOAuthLogin('KAKAO'),
        finish: (code: string) => loginWithOAuthCode('KAKAO', code),
    },
    NAVER: {
        start: () => redirectToOAuthLogin('NAVER'),
        finish: (code: string) => loginWithOAuthCode('NAVER', code),
    },
} as const;