function FlipCard({ img, alt, name }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt={alt} />
        </div>
        <div className="flip-card-back">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
