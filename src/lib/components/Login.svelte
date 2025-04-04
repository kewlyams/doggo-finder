<script lang='ts'>
    import { login } from '../utilities/login';
    import { LoginSchema } from '$lib/schemas/LoginSchema';

    import image from '$lib/dog2.png'
    
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
    
                    <label for="name">Name</label>
                    <input type="text" id="name" bind:value={name}/>
                    <div class="error"></div>
    
                </div>
                <div class="inputField">
    
                    <label for="email">Email</label>
                    <input type="text" id="email" bind:value={email}/>
    
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
            height: 225px;
            width: auto;
            object-fit: contain;
        }
    
        input {
            height: 3em;
            width: 25em;
        }

        li {
            list-style-type: none;
            color: rgb(208, 114, 114);
            text-align: center;
        }
        
        button {
            align-self: center;
            width: 100%;
            height: 4em;
            border: none;
            margin-top: auto;
            cursor: pointer;
            background-color: #1961ad;
            border-bottom: 4px solid #073e78;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 700;
            color: white;  
    
        }
        
        button:hover {
            align-self: center;
            background-color: #0d4682;
    
        }
    
        .loginForm {
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 550px;
            width: 400px;
            margin-left: 38%;
            margin-top: 12%;
    
                
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
        }
    
    
    </style>