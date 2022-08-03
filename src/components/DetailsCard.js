import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

export default function DetailsCard({ }) {
  const [apiDatabyId, setApiDataById] = useState(null);
  // const search = useLocation().search;
  const params = useParams();
  console.log(params);
  const id = parseInt(params.id);
  async function getApiDataById() {
    let resultData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    resultData = await resultData.json();
    setApiDataById(resultData)

  }
  useEffect(() => {
    getApiDataById()
  }, [id])
  console.log("apiDatabyId", apiDatabyId)
  return (
    <div className='container mt-5' style={{ maxWidth: '800px' }}>
      <div className='row'>
        <div className='col-5 border d-flex justify-content-center rounded-start'>
          <img className='image-fluid' style={{ maxWidth: '250px' }} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`} />
        </div>
        <div className='col-7 border rounded-end fs-6'>
          
         

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Info</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Id</th>
                <td>{id}</td>
                
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{apiDatabyId && apiDatabyId.forms[0].name}</td>
                
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td colspan="2">{apiDatabyId && apiDatabyId.weight}</td>
                
              </tr>
              <tr>
                <th scope="row">Height</th>
                <td colspan="2">{apiDatabyId && apiDatabyId.height}</td>

              </tr>
              <tr>
                <th scope="row">Types</th>
                <td colspan="2">{apiDatabyId && apiDatabyId.types.map(item => <span>&nbsp; {item.type.name}</span>)}</td>

              </tr>
              <tr>
                <th scope="row">State</th>
                <td colspan="2">{apiDatabyId && apiDatabyId.stats.map((item) => {
                  return <>
                    <span>&nbsp; {item.base_stat}</span> <br />
                    <span>&nbsp; {item.stat.name}</span>
                    {/* <span>&nbsp; {item.stat.url}</span> */}
                  </>
                })}</td>

              </tr>
            </tbody>
          </table>
          <Link to='/' className='btn btn-link my-3'>Go back</Link>
        </div>
      </div>
    </div>
  )
}
