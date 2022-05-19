import Actions from "./components/Actions";
import Comments from "./components/Comments";
import Description from "./components/Description";
import { Container } from "./style";

function CardInfo() {
    return (
        <Container>
            <Actions />
            <Description />
            <Comments />
        </Container>
    )
}

export default CardInfo;