import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode("#dcd3b8", "#1A202C")(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 25,
                textUnderlineOffset: 6,
                testDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 4,
                marginBottom: 5
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#000000', '#ffffff')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M Plus Rounded 1c'",
}

const colors = {
    glassTeal: '@88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme