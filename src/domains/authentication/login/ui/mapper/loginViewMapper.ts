import type {AuthProvider} from '../../domain/model/AuthProvider';
import type {LoginViewModel} from '../../ui/model/loginViewModel';

import kakaoIcon from '$lib/assets/kakao_logo.webp';
import googleIcon from '$lib/assets/google_logo.webp';
import naverIcon from '$lib/assets/naver_logo.webp';

export const mapToLoginViewModel = (
	providers:AuthProvider[]
): LoginViewModel[] => {
	return providers.map((provider) => {
		switch (provider) {
			case 'GOOGLE':
				return {
                    type:provider,
                    label:'Google 계정으로 계속하기',
                    icon:googleIcon,
                    style:'bg-[#2a2f3a]/50 hover:bg-[#3a4150]',
                };

			case 'KAKAO':
				return {
                    type:provider,
                    label:'Kakao 계정으로 계속하기',
                    icon:kakaoIcon,
                    style:'bg-[#3a3a1f]/50 hover:bg-[#4a4a2a]',
                };

			case 'NAVER':
				return {
                    type:provider,
                    label:'Naver 계정으로 계속하기',
                    icon:naverIcon,
                    style:'bg-[#1f3a2a]/50 hover:bg-[#2a4a3a]',
                };
        }
    });
};