import CardInfo from './components/CardInfo';
import HeaderCard from './components/HeaderCard';
import { Container } from './style'

function Card () {
    return (
        <Container>
            <HeaderCard />
            <img className="foto" src="https://source.unsplash.com/random/600x600" alt="foto" />
            <CardInfo />
        </Container>
    )
}

export default Card;