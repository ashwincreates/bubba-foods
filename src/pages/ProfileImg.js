import { Col, Row } from "react-bootstrap";

function ProfileImg() {
  return (
    <>
      <Row
        style={{
          backgroundImage: `url(${require('../components/profilebg_img.PNG')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '300px',
          margin: '0 -15px', // Add negative margin to remove horizontal padding of columns
        }}
      >
        <Col xs={4}></Col>
        <Col xs={4}></Col>
        <Col xs={4}></Col>
      </Row>
    </>
  )
}

export default ProfileImg;
