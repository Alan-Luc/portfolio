import { Container, Box, Heading, Text, Image, Button, useColorModeValue, List, ListItem, Link, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import {
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5'
import { MdEmail, MdPhone } from 'react-icons/md'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Section>
        <Box borderRadius="lg" bg={useColorModeValue("#9DAF89", "#415865")} p ={3} mb={6} align="center" mt={8}>
          Hello, I&apos;m full-stack web developer based in Toronto!
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" size="2xl" variant="page-title">
              Alan Luc
            </Heading>
            <Text fontSize="lg">3rd Year Industrial Engineering Student</Text>
          </Box>
          <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6}} 
          align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="images/me.png" alt="Profile image"/>
          </Box>
        </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Me
          </Heading>
          <Paragraph>
            I am currently in my 3rd year of studying Industrial Engineering at Ryerson University.
            I love to know the ins and outs of whatever it is I&apos;m working on, from planning
            and designing full-stack projects, all the way to assembling a skateboard or mechanical keyboard.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon/>} bg={useColorModeValue("#9DAF89", "#415865")}>
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Paragraph>
            Currently looking for Summer 2022 Internship Opportunities!
          </Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get In Touch
        </Heading>
        <Paragraph>
          I&apos;m always looking for new opportunities,
          and I would love to have a chat! Here is my
          resume and socials down below, feel free to
          shoot a message any time!
        </Paragraph>
        <List>
          <ListItem>
            <Link href="https://github.com/Alan-Luc" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("#9DAF89", "#415865")}
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Alan-Luc
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/alanluc0611" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("#9DAF89", "#415865")}
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @alanluc0611
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:alanluc9@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("#9DAF89", "#415865")}
                leftIcon={<Icon as={MdEmail} />}
              >
                alanluc9@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="tel:647-963-0041" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("#9DAF89", "#415865")}
                leftIcon={<Icon as={MdPhone} />}
              >
                647-963-0041
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
            <NextLink href="/AlanLucResume2021.pdf">
              <Button rightIcon={<ChevronRightIcon/>} bg={useColorModeValue("#9DAF89", "#415865")}>
                My Resume
              </Button>
            </NextLink>
          </Box>
      </Section>
      </Container>
    </Layout>
  )
}

export default Page