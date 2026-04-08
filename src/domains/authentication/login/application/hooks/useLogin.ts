import { writable } from 'svelte/store';
import type { LoginState } from './loginState';
import type { AuthProvider } from '../../domain/model/AuthProvider';
import { loginCommands } from '../commands/loginCommands';

export function useLogin() {
    const state = writable<LoginState>({
        status: 'IDLE',
    });

    // 로그인 시작
    function executeLoginAction(type: AuthProvider) {
        state.update(s => ({ ...s, status: 'LOADING' }));

        loginCommands[type].start()
            .then(() => {
                state.update(s => ({ ...s, status: 'SUCCESS' }));
            })
            .catch(() => {
                state.update(s => ({ ...s, status: 'FAIL' }));
            });
    }

    // 로그인 완료
    async function executeOAuthCallback(type: AuthProvider, code: string) {
        state.update(s => ({ ...s, status: 'LOADING' }));

        try {
            await loginCommands[type].finish(code);

            state.update(s => ({
                ...s,
                status: 'SUCCESS',
            }));
        } catch (e) {
            state.update(s => ({ ...s, status: 'FAIL' }));
            throw e;
        }
    }

    return {
        state,
        executeLoginAction,
        executeOAuthCallback,
    };
}