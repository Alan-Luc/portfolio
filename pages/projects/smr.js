import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Simple Manga Reader">
    <Container>
      <Title>
        Simple Manga Reader <Badge>May 2021-July 2021</Badge>
      </Title>
      <P>
        A web app to read from MangaDex's Catalogue and Imgur albums, using
        MangaDex and Imgur's APIs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://simplemangareader.netlify.app/#/">
          https://simplemangareader.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React | NodeJS | Express</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/smr_landing.png" alt="Simple Manga Reader" />
      <WorkImage src="/images/works/smr_search.png" alt="Simple Manga Reader" />
      <WorkImage src="/images/works/smr_read.png" alt="Simple Manga Reader" />
      <WorkImage src="/images/works/smr_ui.png" alt="Simple Manga Reader" />
    </Container>
  </Layout>
)

export default Work