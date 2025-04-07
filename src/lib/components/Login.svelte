<script lang='ts'>
    import { login } from '../utilities/getLogin';
    import { LoginSchema } from '$lib/schemas/LoginSchema';
    import image from '$lib/dog4.png'
    
    let name: string;
    let email: string;
    let errorMessages: String[] = [];

    const getLogin = () => {
        
        const userLogin = {
            name: name,
            email: email
        }
        const safeParse = LoginSchema.safeParse(userLogin);

        if(!safeParse.success){
            errorMessages = safeParse.error.errors.map(err => err.message);
        }

        if(safeParse.success){
            login(name, email);
        }
    }
    </script>
    
<form on:submit|preventDefault={getLogin}>
    <div class="loginForm">
    
        <div class="inputBox">
    
            <img src={image} alt="dog">
    
            <div class="inputField">
    
                <input type="text" placeholder="name" id="name" bind:value={name}/>
                <input type="text" placeholder="email" id="email" bind:value={email}/>
    
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
    
    input {
        height: 3em;
        width: 25em;
        background-color: rgb(69, 67, 84);
        border: none;
        color: white;
        padding-left: 10px;
        margin-top: 2em;
    }

    li {
        list-style-type: none;
        color: rgb(216, 66, 66);
        text-align: center;
    }
        
    button {
        align-self: center;
        width: 100%;
        height: 4em;
        border: none;
        margin-top: auto;
        cursor: pointer;
        background-color: #433d88;
        border-bottom: 4px solid #1b1f5a;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 700;
        color: white;  
    }
        
    button:hover {
        align-self: center;
        background-color: #1b1f5a;
    
    }
    
    .loginForm {
        box-shadow: rgba(0, 0, 0, 0.711) 0px 8px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 550px;
        width: 400px;
        margin-left: 38%;
        margin-top: 200px;         
    }
    
    .inputBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        
    .inputField {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: .5em;
        margin-top: 1em;
    }

    @media (max-width: 600px){
        .loginForm {
            margin-top: 20%;
            margin-left: 5%;
        }
    }
    
</style>