import React, { useState, useEffect } from 'react'
import SmallCard from './SmallCard';
// import SmallCardSearch1 from './SmallCardSearch1';

export default function MainComp() {
    const [apiData, setApiData] = useState('');
    const [searchApiData, setSearchApiData] = useState('');
    const [dataToRender, setDataToRender] = useState('');

   async function getApiData() {
       let resultData = await fetch('https://pokeapi.co/api/v2/pokemon');
       resultData = await resultData.json();
       setApiData(resultData.results)
       setDataToRender(resultData.results);
       setSearchApiData([])
    //    console.log(resultData.results)
     // alert("btn clicked")
    }

   async function searchResult(name){
        try {
            fetch('https://pokeapi.co/api/v2/pokemon')
            let resultData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            resultData = await resultData.json();
            console.log(resultData);
            setSearchApiData(resultData);
            setDataToRender(apiData.filter(x => x.name === name));
        } catch (error) {
            console.log('eeeeee');
            console.log(error);
            setSearchApiData([]);
        }
    }
   
  useEffect(()=>{
      getApiData() 
  }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div class="input-group my-5">
                        <input type="text" onChange={(e) => searchResult(e.target.value)} class="form-control" placeholder="search..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='col-md-4'>
                    <select class="form-select my-5" aria-label="Default select example">
                        <option selected>Type</option>
                        {
                            searchApiData && searchApiData.types && searchApiData.types.map(item =>
                                <option value={item.type.name}>{item.type.name}</option>
                            )
                        }
                    </select>
                </div>
            </div>
         
          <div className='row'>
            {
                    dataToRender ? 
                        dataToRender && dataToRender.map((item, index) => {
                        return <SmallCard key={index} id={index}  items={item} />
                    }): null
            }
          </div>
            
        </div>
    )
}
