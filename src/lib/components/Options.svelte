<script lang="ts">
    import { goto } from "$app/navigation";
    import { resetFavorites } from "$lib/stores/favorites";
    import { logout } from "$lib/services/getLogout";
    import Button from "./ui/button/button.svelte";

    const reset = () => {
        goto('/');
        resetFavorites();
    }
</script>

<Button class="border 4 border-purple-500 hover:bg-purple-500" onclick={() => goto('/match')}>Match</Button>
<Button class="border 4 border-purple-500 hover:bg-purple-500 ml-5" onclick={reset}>Reset</Button>
<Button class="border 4 border-purple-500 hover:bg-purple-500 ml-5" onclick={() => logout()}>Logout</Button>
