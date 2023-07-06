import { Col, Container, Row } from "react-bootstrap";
import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";

function ProfileMain() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={20}>
            <ProfileImg />
            {/* <img src="images/logout.png"></img> */}
          </Col>
        </Row>
      </Container>
      <ProfileDetails />
    </>
  );
}
export default ProfileMain;
