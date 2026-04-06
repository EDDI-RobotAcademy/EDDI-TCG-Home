<script lang="ts">
    import { useLogin } from '../../application/hooks/useLogin';
    import { onMount } from 'svelte';
    import { getLoginProviders } from '../../application/usecase/getLoginProviders';
    import { mapToLoginViewModel } from '../mapper/loginViewMapper';
    import type { LoginViewModel } from '../model/loginViewModel';

    let viewModels: LoginViewModel[] = [];
    onMount(async () => {
        const providers = await getLoginProviders();
        viewModels = mapToLoginViewModel(providers);
    });

    const login = useLogin();

    // Todo: 임시용으로 수정 필요
    const handleSignup = () => {
        console.log('회원가입 이동');
    };
</script>

<style>
    /* Todo: shared에서 관리 필요 */
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
</style>

<div class="w-[450px] h-[580px] p-10 bg-[rgba(10,15,25,0.75)] backdrop-blur-[5px] rounded border border-white/10 flex flex-col gap-14">

    <!-- Header -->
    <div class="text-center mt-6">
        <h1 class="text-[36px] font-[Orbitron] font-extrabold text-[#FF5A2F] tracking-wider">
            EDDI TCG
        </h1>

        <p class="mt-2 text-[20px] text-[#D1D5DB] font-[Noto Sans] font-medium">
            로그인
        </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-5">
        {#each viewModels as provider}
            <button
                class={`
                    w-full py-3 rounded-md
                    border border-white/10
                    text-[#E5E2E1] text-[14px]
                    flex items-center justify-center gap-3
                    transition-colors duration-200
                    cursor-pointer
                    ${provider.style}
                `}
                on:click={() => login.executeLoginAction(provider.type)}
            >
                <!-- 아이콘 -->
                <img
                    src={provider.icon}
                    alt={provider.type}
                    class="w-[28px] h-[28px] object-contain"
                />

                <!-- 텍스트 -->
                {provider.label}
            </button>
        {/each}
    </div>

    <!-- 회원 가입 -->
    <div class="text-center text-[12px] text-[#9CA3AF] mt-12">
        아직 계정이 없으신가요?
        <button
            class="ml-2 text-[#FF5A2F] hover:underline cursor-pointer"
            on:click={handleSignup}
        >
            회원가입
        </button>
    </div>
</div>