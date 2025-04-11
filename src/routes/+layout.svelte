<script lang="ts">
    import { Toaster } from "$lib/components/ui/sonner";
    import "../app.css";
    import '@fontsource-variable/quicksand';
</script>

<div class="nav-bar">
    <h2>DoggoFinder</h2>
</div>

<slot></slot>
<Toaster></Toaster>

<style>
    
    :global(body) {
        font-family: 'Quicksand Variable', sans-serif;
        margin: 0;
	    padding: 0;
        background-color: rgb(32, 32, 44);
        overflow: hidden;
    }

    .nav-bar {
        width: 100%;
        height: 60px;
        background-color: rgb(18, 18, 26);
        display: flex;
        flex-direction: row;
    }

    .nav-bar h2 {
        padding: 0;
        margin: 0;
        width: 100%;
        font-size: 2em;
        margin-left: 1em;
        margin-top: 8px;
        color: #a46ede;
    }

</style>
