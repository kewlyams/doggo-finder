<div class="nav-bar">
    
    <h2>DoggoFinder</h2>

</div>

<slot></slot>

<style>
    
    :global(body) {
        margin: 0;
	    padding: 0;
        background-color: rgb(255, 255, 255);
    }


    .nav-bar {
        width: 100%;
        height: 60px;
        /* background-color: #ffffff; */
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .nav-bar h2 {
        padding: 0;
        margin: 0;
        width: 100%;
        font-size: 2em;
        margin-left: 1em;
        margin-top: .5em;
        color: #0d4682;
    }

</style>