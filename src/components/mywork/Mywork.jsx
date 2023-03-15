import React from 'react'
import './mywork.css'
import login_auth from '../../assets/login_auth.png'
import Restaurant from '../../assets/Restaurant.png'
import Todoslist from '../../assets/Todoslist.png'
import Registrationform from '../../assets/Registrationform.png'
import Realstate from '../../assets/Realstate.png'
import Crudapp from '../../assets/Crudapp.png'
import Bootstrap from '../../assets/Bootstrap.png'
import Html_CSS from '../../assets/Html_CSS.png'


const Mywork = () => {
  return (
    <section id='mywork'>

      <div className="work__head">
        <div className="work__title">My Work</div>
      </div>


      <div className=" container-w ">
        <div className="work-container">

        <div className="box">
          <img src={login_auth} alt="login_auth" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Login Authentication</h2>
              <span> This is an login form where you can login and sign up if your new user , You can also sign in with google . All users data are stored in firebase.</span> <br />
              <h2>Technologies used</h2>
              <span> React.js</span> <br /> <br />

              <a href="https://genuine-cobbler-b3cc2c.netlify.app" target={'_blank'} className='btn-w'>Link</a>
             
            </div>
          </div>
        </div>

        <div className="box">
          <img src={Crudapp} alt="Registrationform" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Crudapp </h2>
              <span> A ReactApp where you can add users personal details , you can  edit and delete that detail.  
               </span> <br />
              <h2>Technologies used</h2>
              <span> React.js ,Json-server , RestApi </span> <br /> <br />
              <a href="https://papaya-marzipan-f944fd.netlify.app" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div> 

        <div className="box">
          <img src={Realstate} alt="Registrationform" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>RealState  </h2>
              <span> A responsive realEstate website to test my Html5,CSS3,JavaScript. I have made carousel so image will slides in every particular time(s). </span> <br />
              <h2>Technologies used</h2>
              <span> Html , CSS , Javascript </span> <br /> <br />
              <a href="https://rgound111.github.io/Realstate-website/" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div>
        
        <div className="box">
          <img src={Todoslist} alt="Todoslist" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Todos list </h2>
              <span> This is an to do app where u can create read and delete tasks , That data will be stored in Localstorage of the browser . </span> <br />
              <h2>Technologies used</h2>
              <span> React.js</span> <br /> <br />
              <a href="https://mellifluous-crumble-21efbe.netlify.app" target={'_blank'} className='btn-w'>Link</a>
             
            </div>
          </div>
        </div>

        <div className="box">
          <img src={Registrationform} alt="Registrationform" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Registration-form </h2>
              <span> This is an registration form  and it's available with total password validation </span> <br />
              <h2>Technologies used</h2>
              <span> Html5 , CSS3 </span> <br /> <br />
              <a href="https://rgound111.github.io/Registration-form/" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div>
       
        <div className="box">
          <img src={Restaurant} alt="Restaurant" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Restaurant Website</h2>
              <span> A responsive restaurant website  here you can reserve your seat in prior ,it's location is availaable on contact page .</span> <br />
              <h2>Technologies used</h2>
              <span> Html ,CSS ,Javascript </span> <br /> <br />
              <a href="https://rgound111.github.io/Restaurant-website/" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div>

        <div className="box">
          <img src={Bootstrap} alt="Registrationform" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2>Bootstrap </h2>
              <span> Made this website to practice my bootstrap5 skill </span> <br />
              <h2>Technologies used</h2>
              <span> Bootstrap 5 </span> <br /> <br />
              <a href=" https://rgound111.github.io/Website-Bootstrap/" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div>

        <div className="box">
          <img src={Html_CSS} alt="Registrationform" id='image' />
          <div className="overlay overlayfade">
            <div className="text">
              <h2> Html_CSS </h2>
              <span> This is an non-responsive website , Made this website to practice my Html5 , CSS3 skill </span> <br />
              <h2>Technologies used</h2>
              <span> Html5 , CSS3  </span> <br /> <br />
              <a href=" https://rgound111.github.io/Html-CSS-/" target={'_blank'} className='btn-w'>Link</a>
              
            </div>
          </div>
        </div>

        </div>
        
      </div>

    </section>
  )
}

export default Mywork

