import "./Login.css"

export default function Login() {
  return (
    <div className="login-page">

      {/* LADO ESQUERDO */}

      <div className="login-left">

        <div className="login-brand">

          <h1>MJovem</h1>

          <p>
            Plataforma do ministério jovem para gestão de eventos,
            equipe e participação da comunidade.
          </p>

        </div>

      </div>


      {/* FORMULÁRIO */}

      <div className="login-right">

        <div className="login-card">

          <h2>Entrar</h2>

          <form className="login-form">

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="********" />
            </div>

            <button className="login-button">
              Entrar
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}