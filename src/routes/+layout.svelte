<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.min.css'

</script>

<div class="nav-bar">
    
    <h2>DoggoFinder</h2>

</div>

<slot></slot>

<style>
    
    :global(body) {
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
        margin-top: .5em;
        color: #d4d4d4;
    }

</style>