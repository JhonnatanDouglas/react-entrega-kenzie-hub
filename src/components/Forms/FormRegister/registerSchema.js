import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(4, 'No mínimo 4 letras'),
    email: z
      .string()
      .min(1, 'E-mail obrigatório')
      .email('Informe um e-mail válido'),
    password: z
      .string()
      .min(8, 'No mínimo 8 dígitos')
      .regex(/(?=.*[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
      .regex(/(?=.*[a-z])/, 'É necessário pelo menos uma letra minúscula')
      .regex(/(?=.*[0-9])/, 'É necessário pelo menos um número'),
    confirm: z.string().min(1, 'Confirme sua senha'),
    bio: z.string().min(4, 'Escreva sobre você'),
    contact: z.string().min(2, 'Informe uma rede social ou um site'),
    course_module: z.string().nonempty('Obrigatório selecionar um Módulo'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas precisam ser iguais',
    path: ['confirm'],
  })
