import { HeroBackgroundTone } from './backgroundToneType';
import { HeroCtaType } from './heroCtaType';
import type { RaceSelectCtaType } from './raceSelectCtaType';

export interface HomeModel {
    hero: {
        title: string;
        description: string[];

        background: {
            tone: HeroBackgroundTone;
        };

        primaryAction: {
            label: string;
            type: HeroCtaType;
        };
    };

    intro: {
        headline: string[];
        description: string[];
        primaryAction: string;
    };

    race: {
        headline: string;
        buttons: {
            type: RaceSelectCtaType;
            image: string;
        }[];
    };
}
