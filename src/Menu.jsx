import React from 'react';


const Menu = (props) => {
  return (
    <>
      <div className='col-md-4  col-12 mx-auto'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={props.img} className="card-img-top" alt="...loading" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title} </h5>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${props.id}`}>
              INGREDIENT
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={props.img} alt="...loading" style={{ margin: '0 auto', }} />
                  </div>
                  <div className="modal-body">
                    <h1 className="modal-title" id="exampleModalCenterTitle">{props.title}</h1>
                    <ol>
                      {
                        props.ingredient.map((ingredient, key) => (
                          <li key={key}>{ingredient.text}</li>
                        ))
                      }
                    </ol>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <a href={props.url} className="btn btn-primary" target='_blank'>More</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>



    </>
  );
};
export default Menu;
