import type { HomeModel } from '../../domain/model/homeModel';

export type HomeState =
  | { status: 'LOADING'; model: HomeModel }
  | { status: 'READY'; model: HomeModel }
  | { status: 'LOCKED'; reason: string; model?: HomeModel };