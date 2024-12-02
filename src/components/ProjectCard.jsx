import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
  <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} width={'500px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OfoNumnTnZifR5FxIVxUxqmrdJ7gd5ffSA&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OfoNumnTnZifR5FxIVxUxqmrdJ7gd5ffSA&s" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Languages Used: <span className='text-danger'>language</span></h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem illum dolorum esse, ratione sint vitae, labore laborum voluptatum ipsa asperiores eum magnam minus aspernatur necessitatibus ab corrupti, minima veniam!</p>
            </div>

          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/bhavana861/calculator.git" className='btn btn btn-secondary me-2'><i className="fa-brands fa-github"></i></a>
            <a href="https://bhavana861.github.io/calculator/" className='btn btn btn-secondary'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
