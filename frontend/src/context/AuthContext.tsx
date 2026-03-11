import { createContext, useState, useEffect } from "react"

type AuthContextType = {
  user: any
  token: string | null
  login: (token: string, user: any) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {

    const savedToken = localStorage.getItem("token")
    const savedUser = localStorage.getItem("user")

    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
    }

  }, [])

  function login(token: string, userData: any) {

    setToken(token)
    setUser(userData)

    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  function logout() {

    setToken(null)
    setUser(null)

    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}