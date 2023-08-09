import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Coloque seu e-mail cadastrado'),
  password: z.string().min(8, 'Coloque sua senha cadastrada'),
})
