import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Play Tic Tac Toe!">
    <Container>
      <Title>
        Play Tic Tac Toe! <Badge>Dec 2020-Jan 2021</Badge>
      </Title>
      <P>
        A Tic Tac Toe web app, allowing for real-time multiplayer with other users
        in private rooms.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://multictactoe.herokuapp.com/">
          https://multictactoe.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React | NodeJS | Express | Socket.io</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mttt_join.png" alt="Play Tic Tac Toe!" />
      <WorkImage src="/images/works/mttt_waiting.png" alt="Play Tic Tac Toe!" />
      <WorkImage src="/images/works/mttt_game.png" alt="Play Tic Tac Toe!" />
      <WorkImage src="/images/works/mttt_game2.png" alt="Play Tic Tac Toe!" />
    </Container>
  </Layout>
)

export default Work