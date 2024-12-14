import React from "react";

function Card(props) {
  return (
    <figure className="h-[60vh] w-[50vh] border -[1px] border-black ">
      <img src="./portraitman.png" alt="man" className="w-full h-1/2" />

      <figcaption className="text-center pt-3 grid">
        <strong>{props.Hero}</strong>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolore
          dolores, accusamu laboriosam!
        </small>
      </figcaption>
    </figure>
  );
}

export default Card;
