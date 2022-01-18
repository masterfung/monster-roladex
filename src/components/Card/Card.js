import "./Card.css";

const Card = props => {
  const { monster } = props;
  return (
    <div className="card-container">
        <img alt="monster-profile" src={`https://robohash.org/${monster.id}?set=set2`}></img>
        <p className="name">{monster.name}</p>
        <p className="field">{monster.email}</p>
      </div>
  )
}

export default Card;