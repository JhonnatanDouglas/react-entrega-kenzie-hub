import { z } from "zod"

export const modalDetailsSchema = z.object({
  status: z.string().nonempty("Obrigatório selecionar um Módulo"),
})
