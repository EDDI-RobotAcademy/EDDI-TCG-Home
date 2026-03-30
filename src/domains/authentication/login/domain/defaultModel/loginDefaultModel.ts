import type { LoginModel } from '../model/loginModel';

import kakaoIcon from '$lib/assets/kakao_logo.webp';
import googleIcon from '$lib/assets/google_logo.webp';
import naverIcon from '$lib/assets/naver_logo.webp';


export const LOGIN_DEFAULT: LoginModel = {
    providers: [
        { type: 'google', label: 'Google 계정으로 계속하기', icon: googleIcon },
        { type: 'kakao', label: 'Kakao 계정으로 계속하기', icon: kakaoIcon },
        { type: 'naver', label: 'Naver 계정으로 계속하기', icon: naverIcon },
    ],
};