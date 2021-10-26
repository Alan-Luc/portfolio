import NextLink from 'next/link'
import {Box, Heading, Text, Container, Divider, Button, Image, useColorModeValue } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Image src="https://i.imgur.com/ANCpysM.png" mt={10}/>
            <Heading as="h1" mt={8}>Not Found</Heading>
            <Text>The page you are looking for does not exist.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button 
                    bg={useColorModeValue("#9DAF89", "#415865")}
                    >
                        Return to main page
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound