<script lang="ts">
    import { LOGIN_DEFAULT } from '../../domain/defaultModel/loginDefaultModel';

    // Todo: 임시용으로 수정 필요
    const handleLogin = (provider: string) => {
        console.log(provider);
    };

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
        {#each LOGIN_DEFAULT.providers as provider}
            <button
                class={`
                    w-full py-3 rounded-md
                    border border-white/10
                    text-[#E5E2E1] text-[14px]
                    flex items-center justify-center gap-3
                    transition-colors duration-200
                    cursor-pointer
                    ${provider.type === 'google' ? 'bg-[#2a2f3a]/50 hover:bg-[#3a4150]' : ''}
                    ${provider.type === 'kakao' ? 'bg-[#3a3a1f]/50 hover:bg-[#4a4a2a]' : ''}
                    ${provider.type === 'naver' ? 'bg-[#1f3a2a]/50 hover:bg-[#2a4a3a]' : ''}
                `}
                on:click={() => handleLogin(provider.type)}
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