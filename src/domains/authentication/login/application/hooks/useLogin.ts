import { writable } from 'svelte/store';
import type { LoginState } from './loginState';
import type { LoginProvider } from '../../domain/model/loginModel';
import { LOGIN_DEFAULT } from '../../domain/defaultModel/loginDefaultModel';
import { loginCommands } from '../commands/loginCommands';

export function useLogin() {
    const state = writable<LoginState>({
        status: 'IDLE',
        model: LOGIN_DEFAULT,
    });

    function executeLoginAction(type: LoginProvider) {
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