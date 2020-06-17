import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.image} alt="" />
      <div className="content-container">
        <h3>{props.data.title}</h3>
        {props.data.htmlText ? (
          <div dangerouslySetInnerHTML={{ __html: props.data.htmlText }}></div>
        ) : (
          <p>{props.data.plainText}</p>
        )}
      </div>
      <div className="links">
        {props.data.links
          ? props.data.links.map((link) => {
              return (
                <a href={link.url} className="link" key={link.name}>
                  <i className={[link.className].join(" ")}></i>
                </a>
              );
            })
          : null}
      </div>
    </article>
  );
};

export default Card;
