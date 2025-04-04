import { z } from "zod";

export const LoginSchema = z.object({
    name: z.string(
        {message: 'Invalid characters'}
    ).min(1,
        {message: 'Please enter your name'}
    ).max(64,
        {message: 'To many characters'}
    ).trim().toLowerCase(),
    email: z.string(
        {message: 'Invalid characters'}
    ).min(1,
        {message: 'Please enter your email'}
    ).email(
        {message: 'Enter a valid email'}
    ).toLowerCase()
});