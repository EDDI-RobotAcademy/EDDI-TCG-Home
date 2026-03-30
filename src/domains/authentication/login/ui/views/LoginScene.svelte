<script lang="ts">
    import '../layout/baseFrame.css';
    import loginBackground from '$lib/assets/login_background.webp';
    import '../effects/loginBackground.css';
    import LoginContent from './LoginContent.svelte';
</script>

<style>
    .scene {
        width: 100%;
        height: 100vh;
        background-color: #030303;
        display: flex;
        flex-direction: column;
        gap: 120px;
    }

    .content {
        position: relative;
        z-index: 3;

        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="frame scene">
    <!-- 배경 -->
    <div
        class="frame-bg"
        style={`background-image: url(${loginBackground});`}>
    </div>

    <!-- 배경 효과 적용-->
    <div class="overlay-dark"></div>
    <div class="overlay-vignette"></div>

    <!-- 로그인 창-->
    <div class="content">
        <LoginContent />
    </div>
</div>
