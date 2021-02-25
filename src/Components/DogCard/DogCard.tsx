import React from "react";

interface IProps {
  url: string;
}

export const DogCard: React.FC<IProps> = ({ url }) => {
  return (
    <div className="box">
      <figure className="image">
        <img src={url} alt="A dog picture" />
      </figure>
    </div>
  );
};
