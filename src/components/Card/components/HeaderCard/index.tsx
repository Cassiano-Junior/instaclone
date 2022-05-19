import { Button, Container } from './style'
import CardActions from './CardActions'
function HeaderCard() {
  return (
    <Container>
      <img src="https://source.unsplash.com/random/42x42" alt="" />

      <div className="name">
        <span>Cassiano Junior</span>
      </div>

      <Button>
        <CardActions />
      </Button>

    </Container>
  )
}

export default HeaderCard
