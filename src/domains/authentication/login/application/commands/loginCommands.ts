import type { AuthProvider } from '../../domain/model/AuthProvider';
import { authApi } from '../../infrastructure/api/authApi'

export type LoginCommand = () => Promise<void>;

async function socialLogin(provider: AuthProvider) {
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

export const loginCommands: Record<AuthProvider, LoginCommand> = {
    GOOGLE: () => socialLogin('GOOGLE'),
    KAKAO: () => socialLogin('KAKAO'),
    NAVER: () => socialLogin('NAVER')
};