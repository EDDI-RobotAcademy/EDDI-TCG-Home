export type LoginProvider = 'google' | 'kakao' | 'naver';

export interface LoginModel {
    providers: {
        type: LoginProvider;
        label: string;
        icon: string;
    }[];
}