<script lang='ts'>
    import { login } from '$lib/services/getLogin';
    import { LoginValidation } from '$lib/utils/LoginValidation';
    import { onMount } from 'svelte';
    import { auth } from '$lib/stores/auth';
    import { goto } from '$app/navigation';
    import { toast } from 'svelte-sonner';
    import Input from '$lib/components/ui/input/input.svelte';
    import image from '$lib/dog4.png'
    
    let name: string;
    let email: string;
    let errorMessages: String[] = [];

    onMount(() => {
        if($auth == "true"){
            goto('/');
        }
    })

    const getLogin = () => {
        const userLogin = {
            name: name,
            email: email
        }
        const safeParse = LoginValidation.safeParse(userLogin);

        if(!safeParse.success){
            errorMessages = safeParse.error.errors.map(err => err.message);
            toast("Please try again");
        }

        if(safeParse.success){
            login(name, email);
        }
    }
    </script>
    
<form on:submit|preventDefault={getLogin}>
    <div class="login-form">
        <div class="input-box">
            <img src={image} alt="dog">
            <div class="input-field">
                <Input type="text" placeholder="name" id="name" bind:value={name}/>
                <Input type="text" placeholder="email" id="email" bind:value={email}/>
            </div>
        </div>

        {#each errorMessages as error}
            <li>{error}</li>
        {/each}

        <button type='submit'>Login</button>
    </div>
</form>
    
<style>
    
    *{
        margin:0; padding:0
    }
    
    img {
        align-self: center;
        margin-top: 3em;
        height: 240px;
        width: auto;
        object-fit: contain;
    }

    li {
        list-style-type: none;
        color: rgb(190, 28, 28);
        text-align: center;
    }
        
    button {
        align-self: center;
        width: 100%;
        height: 4em;
        border: none;
        margin-top: auto;
        cursor: pointer;
        background-color: #463d88;
        border-bottom: 4px solid #2f1b5a;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 700;
        color: white;  
    }
        
    button:hover {
        align-self: center;
        background-color: #291b5a;
    
    }
    
    .login-form {
        box-shadow: rgba(0, 0, 0, 0.711) 0px 8px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 550px;
        width: 400px;
        margin-left: 38%;
        margin-top: 200px;         
    }
    
    .input-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        
    .input-field {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: .5em;
        margin-top: 2em;
    }

    @media (max-width: 600px){
        .loginForm {
            margin-top: 20%;
            margin-left: 5%;
        }
    }
    
</style>