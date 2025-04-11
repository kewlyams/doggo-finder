import { api} from './api';
import { goto } from "$app/navigation";
import { auth } from '$lib/stores/auth';
import { toast } from 'svelte-sonner';


export const login = (name:string, email:string) => {
   return api()
   .post('/auth/login', {
      name:name,
      email:email
   })
   .then((res) => {
      if(res.status == 200){
         auth.set("true");
         goto('/');
      }
   })
   .catch((error) => {
      toast("Oops something went wrong: " + error.message);
   })
}