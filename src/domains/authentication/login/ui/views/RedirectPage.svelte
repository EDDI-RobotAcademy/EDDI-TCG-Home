<script lang="ts">
    import { onMount } from 'svelte';
    import { useLogin } from '../../application/hooks/useLogin';

    const { executeOAuthCallback } = useLogin();

    onMount(async () => {
        // URL에서 code 추출
        const code = new URLSearchParams(window.location.search).get('code');

        if (!code) {
            // 인가 코드 없을 경우 로그인 페이지로 이동
            window.location.href = '/authentication';
            return;
        }

        try {
            await executeOAuthCallback('KAKAO', code);

            window.location.href = '/';
        } catch (e) {
            // 로그인 실패
            console.error('OAuth login failed:', e);
            window.location.href = '/';
        }
    });
</script>