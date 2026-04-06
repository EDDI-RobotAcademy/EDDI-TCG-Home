import type {AuthProvider} from '../../domain/model/AuthProvider';

export const getLoginProviders = async (): Promise<AuthProvider[]> => {
    // TODO: API or Config
    return ['GOOGLE', 'KAKAO', 'NAVER'];
};