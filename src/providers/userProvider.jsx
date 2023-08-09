import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '../services/api'

export const userContext = createContext()

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])
  const [techData, setTechData] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [modalDetailsTechOpen, setIsDetailsOpen] = useState(false)
  const [modalRegisterTechOpen, setIsRegisterOpen] = useState(false)

  const handleOpenModal = (modalName) => {
    if (modalName === 'register-modal') {
      setIsRegisterOpen(true)
    } else if (modalName === 'details-modal') {
      setIsDetailsOpen(true)
    }
  }

  const handleCloseRegisterModal = () => {
    setIsRegisterOpen(false)
  }

  const handleCloseDetailsModal = () => {
    setIsDetailsOpen(false)
  }

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      borderRadius: '0.25rem',
      border: '0rem',
      padding: '0rem 0.75rem',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0, .5)',
    },
  }

  const sucessMessageToast = (message, time) => {
    toast.success(`${message}`, {
      position: 'top-right',
      autoClose: `${time}`,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  const failMessageToast = (message, time) => {
    toast.error(`${message}`, {
      position: 'top-right',
      autoClose: `${time}`,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  const currentPath = window.location.pathname

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@Token')
      const userId = localStorage.getItem('@UserId')
      if (userId && token) {
        try {
          const { data } = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setUserData(data)
          setTechData(data.techs)
          navigate(currentPath)
        } catch (error) {
          localStorage.removeItem('@Token')
          localStorage.removeItem('@UserId')
          console.error(error)
        }
      }
    }
    loadUser()
  }, [isChanged])

  useEffect(() => {
    const verifyLogged = () => {
      const token = localStorage.getItem('@Token')
      const userId = localStorage.getItem('@UserId')
      if (userId && token) {
        navigate('/dashboard')
      }
    }
    verifyLogged()
  }, [])

  const userLogin = async (formLogin) => {
    setIsChanged(true)
    try {
      setButtonDisabled(true)
      const { data } = await api.post('/sessions', formLogin)

      localStorage.setItem('@Token', data.token)
      localStorage.setItem('@UserId', data.user.id)
      localStorage.setItem('@UserLogged', true)
      localStorage.setItem('@TechCardSelected', JSON.stringify({}))

      sucessMessageToast('Login efetuado com sucesso!', 1500)
      setIsChanged(false)

      setTimeout(() => {
        navigate('/dashboard')
      }, 2500)
    } catch (error) {
      failMessageToast('Ops! E-mail ou senha incorretos', 1500)
      console.error(error)
    } finally {
      setTimeout(() => {
        setButtonDisabled(false)
      }, 2400)
    }
  }

  const userRegister = async (formData) => {
    try {
      setButtonDisabled(true)

      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      }
      await api.post('/users', body)

      sucessMessageToast('Conta criada com sucesso!', 1500)

      setTimeout(() => {
        navigate('/')
      }, 2500)
    } catch (error) {
      failMessageToast('Ops! Algo deu errado', 1500)
      console.error(error)
    } finally {
      setTimeout(() => {
        setButtonDisabled(false)
      }, 2400)
    }
  }

  return (
    <userContext.Provider
      value={{
        userData,
        techData,
        setTechData,
        buttonDisabled,
        setButtonDisabled,
        userLogin,
        userRegister,
        handleOpenModal,
        handleCloseRegisterModal,
        handleCloseDetailsModal,
        modalRegisterTechOpen,
        modalDetailsTechOpen,
        customModalStyles,
        sucessMessageToast,
        failMessageToast,
      }}
    >
      {children}

      <ToastContainer
        position='top-right'
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </userContext.Provider>
  )
}
