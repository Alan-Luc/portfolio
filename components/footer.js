import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      Alan Luc &copy; {new Date().getFullYear()} | Credits to {' '}
        <Link href="https://www.craftz.dog/">Takuya Matsuyama</Link>
    </Box>
  )
}

export default Footer