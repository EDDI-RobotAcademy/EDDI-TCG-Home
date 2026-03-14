import type { HomeModel } from './model/homeModel';

import testHumanImage from '$lib/assets/test_human_image.webp';
import testUndeadImage from '$lib/assets/test_undead_image.webp';
import testTrentImage from '$lib/assets/test_trent_image.webp';

export const RACE_DEFAULT: HomeModel['race'] = {
    headline: '종족 미리보기',
    buttons: [
        {
            type: 'SELECT_UNDEAD',
            image: testUndeadImage
        },
        {
            type: 'SELECT_TRENT',
            image: testTrentImage
        },
        {
            type: 'SELECT_HUMAN',
            image: testHumanImage
        },
    ],
};