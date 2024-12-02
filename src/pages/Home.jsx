import React from 'react'
import { Link } from 'react-router-dom'
import landing from '../assets/landingg.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  return (
<>
{/* landing */}
      <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
                <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair</h1>
                <p style={{textAlign:'justify'}}>
                  One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!
               </p>
               <Link to={'/login'} className='btn btn-warning'> STARTS TO EXPLORE</Link>
            </div>
            <div className="col-lg-6">
                  <img className='img-fluid'  src={landing} alt="" />
            </div>
          </div>
        </div>
  
      </div>

{/* Explore Our Projects */}
<div className="my-5 text-center">
  <h1 className='mb-5'> Explore Our Projects </h1>
  <marquee >
    <div className="d-flex">
      <div className="me-5">
        <ProjectCard/>
      </div>
    </div>
  </marquee>
  <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS.....</button>
</div>

{/* Our Testimonials */}
<div className="d-flex justify-content-center align-items-center my-5 flex-column">
  <h1>Our Testimonials</h1>
  <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
    {/* card */}
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png" alt="" />
          <div className='d-flex justify-content-center my-2 '>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://w7.pngwing.com/pngs/793/932/png-transparent-avatar-computer-icons-blog-management-sina-weibo-avatar-woman-couch-cleaning-business-thumbnail.png" alt="" />
          <div className='d-flex justify-content-center my-2 '>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>


          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png" alt="" />
          <div className='d-flex justify-content-center my-2 '>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>


  </div>
</div>

</>
  )
}

export default Home
