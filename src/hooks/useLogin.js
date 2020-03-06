import { useState, useEffect } from 'react'


const useLogin = (status) => {
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if (status) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  })

  return isLogin
}

export default useLogin