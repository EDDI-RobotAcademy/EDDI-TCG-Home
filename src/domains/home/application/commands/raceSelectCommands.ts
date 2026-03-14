import type { RaceSelectCtaType } from '../../domain/model/raceSelectCtaType';

export type RaceSelectCommand= () => void;

export const raceSelectCommands: Record<RaceSelectCtaType,RaceSelectCommand> = {
    SELECT_UNDEAD: () => alert('언데드 소개 페이지로 이동'),
    SELECT_TRENT: () => alert('트랜트 소개 페이지로 이동'),
    SELECT_HUMAN: () => alert('휴먼 소개 페이지로 이동'),
};