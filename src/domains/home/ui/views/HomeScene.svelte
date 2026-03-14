<script lang="ts">
    import { onMount } from 'svelte';
    import HeroFrame from '../frames/hero/HeroFrame.svelte';
    import IntroFrame from '../frames/intro/IntroFrame.svelte';
    import RaceFrame from '../frames/race/RaceFrame.svelte';
    import { useHome } from '../../application/hooks/useHome.ts';

    const home = useHome();
    const state = home.state;

    onMount(() => {
        home.initHome();
    });
</script>

<style>
    .scene {
        width: 100%;
        background-color: #030303;
        display: flex;
        flex-direction: column;
        gap: 120px;
    }
</style>

<div class="scene">
    <HeroFrame
        hero={$state.model.hero}
        onPrimaryAction={home.executeHeroAction}
    />

    <IntroFrame
        intro={$state.model.intro}
        onPrimaryAction={home.executeIntroAction}
    />

    <RaceFrame
        race={$state.model.race}
        onPrimaryAction={home.executeRaceSelectAction}
    />

</div>
