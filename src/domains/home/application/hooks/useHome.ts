import { writable } from 'svelte/store';
import type { HomeState } from './state';
import type { HeroCtaType } from '../../domain/model/heroCtaType';
import type { RaceSelectCtaType } from '../../domain/model/raceSelectCtaType';
import { DEFAULT_HOME_MODEL } from '../../domain/defaultModel/homeDefault';
import { heroCommands } from '../commands/heroCommands';
import { introCommands } from '../commands/introCommands';
import { raceSelectCommands } from '../commands/raceSelectCommands';

export function useHome() {
    const state = writable<HomeState>({
        status: 'LOADING',
        model: DEFAULT_HOME_MODEL,
    });

    async function initHome() {
        // 서버 점검 여부/ WebGL 지원 여부 / 필수 리소스 로딩 완료 여부 / 네트워크 상태 등
        const canEnterGame = true; // Todo: 판단 로직 나중에 추가

        // Todo: 로그인 상태 확인(토큰, 세션 확인)

        state.update(currentState => ({
            ...currentState,
            status: canEnterGame ? 'READY' : 'LOCKED',
        }));
    }

    function executeHeroAction(type: HeroCtaType) {
        const command = heroCommands[type];
        if (command) command();
        else console.warn(`Command${type} 미구현`);
    }

    function executeIntroAction() {
        introCommands();
    }

    function executeRaceSelectAction(type: RaceSelectCtaType) {
        const command = raceSelectCommands[type];
        if (command) command();
        else console.warn(`Command${type} 미구현`);
    }

    return {
        state,
        initHome,
        executeHeroAction,
        executeIntroAction,
        executeRaceSelectAction,
    };
}
