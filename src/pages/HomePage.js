import BubbaCarousel from '../components/BubbaCarousel';
import { Col, Container, Row } from 'react-bootstrap';
import Brands from '../components/Brands';
import Section from '../components/Section';
import Footer from '../components/Footer';
import FoodItemModal from '../components/FoodItemModal';
import ItemCard from '../components/ItemCard';

function HomePage() {
    return (
        <>
            <BubbaCarousel />
            <Container fluid>
                <Row>
                    <Col xs={8} className={'m-auto'}>
                        <Brands />
                        <Section title="Today's Special">
                            <ItemCard/>
                        </Section>
                        <Section title='Festive Special'>
                            <ItemCard/>
                        </Section>
                        <Section title='Combo Offers'>
                            <ItemCard/>
                        </Section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage