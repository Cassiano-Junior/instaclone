import Comment from "./Comment";
import DM from "./DM";
import Like from "./Like";
import Save from "./Save";
import { Container, Interactions } from "./style";

function Actions() {
    return (
        <Container>
            <Interactions>
                <Like />
                <Comment />
                <DM />
            </Interactions>
            <Save />
        </Container>
    )
}

export default Actions;