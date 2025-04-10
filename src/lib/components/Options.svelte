<script lang="ts">
    import { goto } from "$app/navigation";
    import { resetFavorites } from "$lib/stores/favorites";
    import { logout } from "$lib/services/getLogout";

    const reset = () => {
        goto('/');
        resetFavorites();
    }
</script>

<button onclick="{() => goto('/match')}">Match</button>
<button onclick="{reset}">Reset</button>
<button onclick="{() => logout()}">Logout</button>

<style>
    button {
        width: 100%;
        height: 3em;
        background-color: rgb(45, 42, 61);
        color: white;
        border: none;
        margin-bottom: .5em;
    }

    button:hover {
        background-color: rgb(33, 32, 46);
    }
</style>