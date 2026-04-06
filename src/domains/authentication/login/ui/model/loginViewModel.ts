import type {AuthProvider } from '../../domain/model/AuthProvider';

export interface LoginViewModel {
    type:AuthProvider;
    label:string;
    icon:string;
    style:string;
}