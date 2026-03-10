import "./Home.css"
import EventCard from "../components/EventCard"

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">
        <div className="hero-container">

          <h1>
            Conectando Jovens através da Fé
          </h1>

          <p>
            Descubra eventos, vigílias e encontros espirituais
            acontecendo perto de você.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Ver Eventos
            </button>

            <button className="secondary-btn">
              Sobre o Ministério
            </button>
          </div>

        </div>
      </section>

      {/* EVENTOS EM DESTAQUE */}

      <section className="featured-events">

        <h2>Eventos em Destaque</h2>

        <div className="events-grid">

          <EventCard
            title="Vigília Jovem"
            date="20 Abril 2026"
            region="Região Serrana"
          />

          <EventCard
            title="Conferência Jovem"
            date="10 Maio 2026"
            region="Rio de Janeiro"
          />

          <EventCard
            title="Acampamento Espiritual"
            date="02 Junho 2026"
            region="Nova Friburgo"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Participe da Comunidade Jovem</h2>

        <p>
          Conecte-se com jovens e participe de eventos que fortalecem sua fé.
        </p>

        <button className="primary-btn">
          Ver todos os eventos
        </button>

      </section>

    </div>
  )
}