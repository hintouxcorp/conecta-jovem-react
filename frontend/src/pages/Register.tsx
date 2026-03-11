import "./Register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register-page">

      {/* LADO ESQUERDO */}

      <div className="register-left">

        <div className="register-brand">
          <h1>MJovem</h1>

          <p>
            Crie sua conta para participar de eventos, conectar-se com
            outros jovens e fazer parte da comunidade.
          </p>
        </div>

      </div>


      {/* FORMULÁRIO */}

      <div className="register-right">

        <div className="register-card">

          <h2>Criar conta</h2>

          <form className="register-form">

            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="********" />
            </div>

            <div className="input-group">
              <label>Confirmar senha</label>
              <input type="password" placeholder="********" />
            </div>

            <button className="register-button">
              Criar conta
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