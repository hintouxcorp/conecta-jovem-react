import "./Home.css"
import EventCard from "../components/EventCard"
import useReveal from "../hooks/useReveal"

export default function Home() {

  // ativa animação de scroll
  useReveal()

  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>

        <div className="hero-container">

          <h1>Conectando Jovens através da Fé</h1>

          <p>
            Descubra eventos, vigílias e encontros espirituais perto de você.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Ver Eventos</button>
            <button className="secondary-btn">Sobre</button>
          </div>

        </div>

      </section>


      {/* EVENTOS EM DESTAQUE */}

      <section className="featured-events reveal">

        <h2>Eventos em Destaque</h2>

        <div className="events-grid">

          <EventCard
            title="Vigília Jovem"
            date="20 Abril 2026"
            region="Região Serrana"
            image="https://images.unsplash.com/photo-1507692049790-de58290a4334"
          />

          <EventCard
            title="Conferência Jovem"
            date="10 Maio 2026"
            region="Rio de Janeiro"
            image="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
          />

          <EventCard
            title="Acampamento Espiritual"
            date="02 Junho 2026"
            region="Nova Friburgo"
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          />

        </div>

      </section>


      {/* CTA */}

      <section className="cta reveal">

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