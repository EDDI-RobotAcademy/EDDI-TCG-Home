import { axiosInstance } from '../../../../../api/axiosInstance'
import type { AuthProvider } from '../../domain/model/AuthProvider'

export const authApi = {
    // 로그인 URL 요청
    async getLoginUrl(provider: AuthProvider): Promise<string> {
        const response = await axiosInstance.spring.post('/oauth/link', {
            provider // "KAKAO"
        })
        console.log('API 응답:', response);

        const url = response.data?.oauthUrl;

        return url;
    },

    // redirect 이후 로그인 처리
    async loginWithCode(provider: AuthProvider, code: string) {
        const response = await axiosInstance.spring.get(
            '/oauth/request-access-token-after-redirection',
            {
                params: { code }
            }
        );

        return response.data;
    }
}