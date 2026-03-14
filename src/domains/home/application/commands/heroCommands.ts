import type { HeroCtaType } from '../../domain/model/heroCtaType';

export type HeroCommand = () => void;

export const heroCommands: Record<HeroCtaType, HeroCommand> = {
    ENTER_GAME: () => alert('게임 시작 페이지 이동'),
    OPEN_LOGIN: () => alert('로그인 페이지 이동')
};