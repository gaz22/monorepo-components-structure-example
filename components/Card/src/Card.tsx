import React from "react";

export interface Props {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  footer: string | React.ReactNode;
  cardImage: string;
  className?: string;
}

export const Card: React.FC<Props> = ({
  title,
  content,
  footer,
  cardImage,
  className,
}) => {
  return (
    <div className={className ? `${className} card` : `card`}>
      <img className="card-img-top" src={cardImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">{footer}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
