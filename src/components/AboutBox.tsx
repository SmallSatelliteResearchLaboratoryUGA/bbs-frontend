import React from 'react';

interface AboutBoxProps {
    title: string;
    description: string;
    image?: string;
    id?: string;
}

function AboutBox({ title, description, image, id }: AboutBoxProps) {
    return (
      <div className="box">
        <div className="inner">
            <div className="left">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="right">
                {image && <img src={image} alt={title} id={id} />}
            </div>
        </div>
      </div>
    );
  }
  

export default AboutBox;