import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children, _target, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    const activeBg = useColorModeValue("#9DAF89", "#415865")
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? activeBg : undefined}
                color={active ? "#202023" : inactiveColor}>
                    {children}
                </Link>
        </NextLink>
    )
}

const Navbar = (props) => {
    const { path } = props

    return (
        <Box
        position = "fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        style={{backdropFilter: "blur(10px)"}}
        zIndex={1}
        {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5} mt={-2}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} >
                        <Logo />
                    </Heading>   
                </Flex>

                <Stack
                    direction={{base: 'column', md:'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                flexGrow={1}
                mt={{base: 4, nmd: 0}}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/AlanLucResume2022.pdf" path={path}>
                        Resume
                    </LinkItem>
                    <LinkItem href="https://github.com/Alan-Luc" path={path}>
                        My Github
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/AlanLucResume2021.pdf" passHref>
                                    <MenuItem as={Link}>Resume</MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/Alan-Luc" passHref>
                                    <MenuItem as={Link}>My Github</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar