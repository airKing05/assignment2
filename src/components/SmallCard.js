import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import DetailsCard from './DetailsCard';



export default function SmallCard(props) {

    function getIdFromUrl(url) {
        let urlParts = url.split('/');
        console.log("sssss", urlParts[urlParts.length - 1]);
        return urlParts[urlParts.length-2];
    }
  return (
    <div className='col-md-4 my-3 mx-3 border' style={{maxWidth: '200px'}}>
          <p className='py-2'>{props.items.name}</p>
          {/* <p className='py-2'>{props.items.}</p> */}
          {/* <p className='py-2'>type</p> */}
          <div className='py-2'><img className='image-fluid' style={{maxWidth: '150px'}} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${getIdFromUrl(props.items.url)}.svg`} /></div>
          <Link to={`/${getIdFromUrl(props.items.url)}`}   className='btn btn-light my-3'>Click to Open</Link>
    </div>
  )
}
