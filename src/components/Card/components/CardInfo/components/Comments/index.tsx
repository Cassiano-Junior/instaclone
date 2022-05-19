import Emotion from './components/Emotion'
import { Button, CommentAdd, CommentsList } from './style'

function Comments() {
  return (
    <>
      <CommentsList>
        <span className="info">View all 92 comments</span>

        <p>
          <span className="user">Jane Doe</span> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur cumque possimusvelit.
        </p>

        <p>
          <span className="user">Jhon Doe</span> Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <span className="info date">10 HOURS AGO</span>
      </CommentsList>

      <CommentAdd>
          <Emotion />
          <input type="text" name="" id="" placeholder='Add a comment...'/>
          <Button>Post</Button>
      </CommentAdd>
    </>
  )
}

export default Comments
