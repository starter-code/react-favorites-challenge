import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoMdRemoveCircle } from 'react-icons/io';

export default function GridItem({ name, imgURL }) {
  return (
    <div className="grid-item">
      <h4 className="name">{name}</h4>
      <div className="img-container">
        <button className="button add">
          <AiFillPlusCircle />
        </button>
        <button className="button remove">
          <IoMdRemoveCircle />
        </button>
        <img src={imgURL} alt={name}></img>
      </div>
    </div>
  );
}
