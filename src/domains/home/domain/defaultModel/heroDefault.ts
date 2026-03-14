import type { HomeModel } from './model/homeModel';

export const HERO_DEFAULT: HomeModel['hero'] = {
    title: 'EDDI TCG',
    description: [
        '죽음이 쌓이고 순리가 왜곡된 세계.',
        '언데드, 트랜트, 그리고 인간.',
        '당신만의 진영으로 전쟁에서 승리하세요.',
    ],
    background: {
        tone: 'dark-fantasy', // 배경효과 변경 가능성 있음
    },
    primaryAction: {
        label: '지금 플레이하기',
        type: 'OPEN_LOGIN',
    },
};