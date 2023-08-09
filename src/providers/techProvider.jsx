import { useContext } from 'react'
import { createContext } from 'react'
import { userContext } from './userProvider'
import { api } from '../services/api'
import { useState } from 'react'

export const techContext = createContext()

export const DashboardProvider = ({ children }) => {
  const [deleteButtonDesabled, setDeleteButtonDesabled] = useState(false)
  const {
    setButtonDisabled,
    techData,
    setTechData,
    handleCloseRegisterModal,
    handleCloseDetailsModal,
    sucessMessageToast,
    failMessageToast,
  } = useContext(userContext)

  const addTech = async (body) => {
    const token = localStorage.getItem('@Token')

    try {
      setButtonDisabled(true)
      const { data } = await api.post('/users/techs', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const newTech = {
        id: data.id,
        title: data.title,
        status: data.status,
        created_at: data.created_at,
        updated_at: data.updated_at,
      }

      sucessMessageToast('Adicionado com sucesso!', 1500)
      setTechData([...techData, newTech])
    } catch (error) {
      console.error(error)
      failMessageToast('Ops! Technologia já está cadastrada...', 1500)
    } finally {
      setButtonDisabled(false)
      handleCloseRegisterModal()
    }
  }

  const updateTech = async (updateFormData) => {
    const techId = JSON.parse(localStorage.getItem('@TechCardSelected'))
    const { id, title } = techId

    const techTitle = title
    const formTechTitle = updateFormData.title

    const statusTech = {
      status: updateFormData.status,
    }

    if (techTitle === formTechTitle) {
      try {
        setButtonDisabled(true)
        const token = localStorage.getItem('@Token')
        const { data } = await api.put(`/users/techs/${id}`, statusTech, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        sucessMessageToast('Status da tecnologia atualizado com sucesso!', 1500)

        setTechData((techData) =>
          techData.map((tech) => (tech.id === id ? data : tech))
        )
      } catch (error) {
        console.error(error)
        failMessageToast(
          'Ops! Algo deu errado na exclusão. Tente novamente.',
          1500
        )
      } finally {
        setButtonDisabled(false)
        handleCloseDetailsModal()
      }
    } else {
      failMessageToast('Ops! Informe corretamente o "Nome" da tecnologia', 1500)
    }
  }

  const deleteTech = async (deleteFormData) => {
    const techId = JSON.parse(localStorage.getItem('@TechCardSelected'))
    const { id, title, level } = techId

    const techTitle = title
    const formTechTitle = deleteFormData.title

    if (techTitle === formTechTitle && level === deleteFormData.status) {
      const token = localStorage.getItem('@Token')
      try {
        setDeleteButtonDesabled(true)
        await api.delete(`/users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        sucessMessageToast('Excluído com sucesso!', 1500)
        setTechData((techData) =>
          techData.filter((tech) => tech.title !== title)
        )
      } catch (error) {
        console.error(error)
        failMessageToast(
          'Ops! Algo deu errado na exclusão. Tente novamente.',
          1500
        )
      } finally {
        setDeleteButtonDesabled(false)
        handleCloseDetailsModal()
      }
    } else {
      failMessageToast(
        'Ops! Informe corretamente o "Nome" e "Status" atuais',
        1500
      )
    }
  }

  return (
    <>
      <techContext.Provider
        value={{ deleteButtonDesabled, addTech, updateTech, deleteTech }}
      >
        {children}
      </techContext.Provider>
    </>
  )
}
