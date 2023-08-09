import { z } from "zod"

export const modalRegisterSchema = z.object({
  title: z.string().min(2, 'No mínimo 2 letras'),
  status: z.string().nonempty("Obrigatório selecionar um Módulo"),
})
