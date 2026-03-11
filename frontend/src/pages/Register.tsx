import "./Register.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setError("")

    if (!form.name || !form.email || !form.password) {
      setError("Preencha todos os campos")
      return
    }

    if (form.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem")
      return
    }

    setLoading(true)

    // aqui futuramente vai chamar API
    setTimeout(() => {
      setLoading(false)
      alert("Cadastro enviado (simulação)")
    }, 1200)
  }

  return (
    <div className="register-page">

      <div className="register-left">
        <div className="register-brand">

          <h1>MJovem</h1>

          <p>
            Crie sua conta para participar de eventos e conectar-se
            com outros jovens.
          </p>

        </div>
      </div>


      <div className="register-right">

        <div className="register-card">

          <h2>Criar conta</h2>

          <form className="register-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Confirmar senha</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="form-error">{error}</p>
            )}

            <button
              className="register-button"
              disabled={loading}
            >
              {loading ? "Criando conta..." : "Criar conta"}
            </button>

          </form>

          <p className="login-link">
            Já tem conta? <Link to="/login">Entrar</Link>
          </p>

        </div>

      </div>

    </div>
  )
}