import "./EventCard.css"

interface Props {
  title: string
  date: string
  region: string
}

export default function EventCard({ title, date, region }: Props) {
  return (
    <div className="event-card">

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