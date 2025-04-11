import { z } from "zod";

export const LoginValidation = z.object({
    name: z.string(
        {message: 'Invalid name'}
    ).min(1,
        {message: 'Please enter your name'}
    ).max(64,
        {message: 'Too many characters'}
    ).trim().toLowerCase(),
    email: z.string(
        {message: 'Invalid email'}
    ).email(
        {message: 'Invalid email'}
    ).toLowerCase()
});