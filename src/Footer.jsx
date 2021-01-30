import React from 'react';

const Footer = () => {

    return (


        <>

            {/* <!-- Footer --> */}
            <footer class="page-footer font-small unique-color-dark">
            <div style={{backgroundColor: "lightblue"}}>
                    <div className="container">

     
                

                        {/* <!-- Grid row--> */}
                        <div className="row py-4 d-flex align-items-center">

                            {/* <!-- Grid column --> */}
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-6 col-lg-7 text-center text-md-right">

                                {/* <!-- Facebook --> */}
                                <a className="fb-ic" href="https://www.w3schools.com/">
                                    <i className="fa fa-facebook-official white-text mr-4"> </i>                                      
                                    
                                </a>
                                {/* <!-- Twitter --> */}
                                <a className="tw-ic" href="https://www.twitter.com/">
                                    <i className="fa fa-twitter white-text mr-4"> </i>
                                </a>
                                {/* <!-- Google +--> */}
                                <a className="gplus-ic" href="https://www.google.com/">
                                    <i className="fa fa-google-plus white-text mr-4"> </i>
                                </a>
                                {/* <!--Linkedin --> */}
                                <a className="li-ic" href="https://www.linkedin.com/">
                                    <i className="fa fa-linkedin white-text mr-4"> </i>
                                </a>
                                {/* <!--Instagram--> */}
                                <a className="ins-ic" href="https://www.instagram.com/">
                                    <i className="fa fa-instagram white-text"> </i>
                                </a>

                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                        {/* <!-- Grid row--> */}

                    </div>
                </div>

               

                  

               

  {/* <!-- Copyright -->  */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://github.com/somyaBIT">SOMYA SINGH</a>
                </div>
 
            {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer -->  */}

        </>

    );

};


export default Footer;