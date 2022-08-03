import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import DetailsCard from './DetailsCard';

export default function SmallCardSearch1(props) {
    console.log("props",props)
    return (
        <div className='col-md-4 my-3 mx-3 border' style={{ maxWidth: '200px' }}>
            <p className='py-2'>{props.data.name}</p>
            {/* <p className='py-2'>{props.items.}</p> */}
            <p className='py-2'>type</p>
            <div className='py-2'><img className='image-fluid' style={{ maxWidth: '150px' }} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`} /></div>
            <Link to={`/${props.id}`} className='btn btn-light my-3'>Click to Open</Link>
        </div>
    )
}