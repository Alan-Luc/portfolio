import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import smrLanding from '../public/images/works/smr_landing.png'
import mtttJoin from '../public/images/works/mttt_join.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={5}>
        Projects
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
              <WorkGridItem id="smr" title="Simple Manga Reader" thumbnail={smrLanding} >
                A web app allowing users to read manga from MangaDex's extensive catalogue,
                and Imgur albums
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="mttt" title="Play Tic Tac Toe!" thumbnail={mtttJoin} >
                A real-time multiplayer Tic Tac Toe web app
              </WorkGridItem>
          </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects