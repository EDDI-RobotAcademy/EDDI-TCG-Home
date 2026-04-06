import { writable } from 'svelte/store';
import type { LoginState } from './loginState';
import type { AuthProvider } from '../../domain/model/AuthProvider';
import { loginCommands } from '../commands/loginCommands';

export function useLogin() {
    const state = writable<LoginState>({
        status: 'IDLE',
    });

    function executeLoginAction(type: AuthProvider) {
        const command = loginCommands[type];

        if (!command) {
            console.warn(`Command ${type} 미구현`);
            return;
        }

        state.update(s => ({
            ...s,
            status: 'LOADING',
        }));

        command()
            .then(() => {
                state.update(s => ({
                    ...s,
                    status: 'SUCCESS',
                }));
            })
            .catch(() => {
                state.update(s => ({
                    ...s,
                    status: 'FAIL',
                }));
            });
    }

    return {
        state,
        executeLoginAction,
    };
}