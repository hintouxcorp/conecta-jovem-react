import "./EventCard.css"

interface Props {
  title: string
  date: string
  region: string
  image: string
}

export default function EventCard({ title, date, region, image }: Props) {

  return (
    <div className="event-card">

      <div
        className="event-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="event-card-content">

        <h3>{title}</h3>

        <p className="event-date">{date}</p>

        <p className="event-region">{region}</p>

        <button className="event-button">
          Ver detalhes
        </button>

      </div>

    </div>
  )
}