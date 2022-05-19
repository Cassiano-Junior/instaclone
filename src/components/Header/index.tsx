import { Container, Button, Content } from './style'
import AddIcon from './AddIcon'

function Header() {
  return (
    <Container>
      <Content>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Botao"
        />

        <Button>
          <AddIcon />
        </Button>
      </Content>
    </Container>
  )
}

export default Header
