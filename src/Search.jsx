import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import swal from '@sweetalert/with-react';
 

const Search = () => {

    // useState here take array element as hits has a proto:Array
    const [menu, setMenu] = useState([]);
    // for  input value
    const [input, setInput] = useState('');
    //    for submit
    const [submit, setSubmit] = useState();
  
    //Useeffect 
    useEffect(() => {
        const getData = async () => {

            // console.log("hey");
           
                const response = await fetch(`https://api.edamam.com/search?q=${submit}&app_id=84d0f5fb&app_key=c271915934dc138cd71bc458b53dd7cf`);
                const data = await response.json();
            if (!data.more) {
                swal({
                    title: "SORRY",
                    text: "No food with such name",
                    icon: "warning",
                    
                    button: "Try again",
                  })
                    
    
                }
                // else if(data.q!='undefined')
                // console.log(data.hits);
            else
                setMenu(data.hits);
            
            
        };

        getData();

    }
    , [submit]);

    //    getdata use for fetching data
    
    //  Update use for updating inputValue
    const Update = (e) => {

        setInput(e.target.value);
        // console.log(input);

    };

    // for searching
    const Searching = (e) => {
        // not refreshing page
        e.preventDefault();
        setSubmit(input);
        setInput('');

    };




    return (

        <>
           <section id='welcome'>
    <div className='container'>
      <div className='welcome text-center'>
      <h1>the food you love</h1>
        <p>Forget the rest,Cook the best</p>
                        <form className="d-flex" onSubmit={Searching} >
                            
                           
                <input className="form-control mr-2 input-group" type="search" placeholder="Search" aria-label="Search" value={input} onChange={Update} />
                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form> 
      </div>
    </div>
  </section>
   
            
  <div className="container py-5 ">
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className='row '>
                        {
                                menu.map((value, index) => {
                                        
                                    return <Menu
                                            // id is taken to provide unique id to every items ,easy to fetch and is written in this manner for modal as string
                                        id={`a${index}`}
                                        // key used ingredients
                                            key={index}
                        //    recipe.image and recipe.label,recipe.ingredients taken from edamam api
                        img={value.recipe.image}
                        title={value.recipe.label}
                        ingredient={value.recipe.ingredients}
                        url={value.recipe.url}
                    />

                })
            }
                            
                   </div>
                 </div>
                </div>
               </div> 
           
          
           




        </>
    );
};
export default Search;