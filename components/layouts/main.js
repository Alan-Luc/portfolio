import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'


const Main = ({ children, router }) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content ="width=device-width, initial-scale=1" />
                <meta name="description" content="Alan's homepage" />
                <meta name="author" content="Alan Luc" />
                <meta name="author" content="portfolio" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-con" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Alan Luc's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title> Alan Luc - Homepage</title>
            </Head>
            
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main