import React from 'react'
import {createTheme} from '@mui/material/styles'
import Head from 'next/head';
import NextLink from 'next/link';
import classes from "../utils/classes";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    Link,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery,
  } from '@mui/material';

export default function Layout({title, description, children}) {
    const theme = createTheme({
     components: {
        MuiLink: {
            defaultProps: {
               underline: 'hover',
            },
        },
      },  
      typography: {
          h1: {
              fontsize: '1.6rem',
              fontweight: 400,
              margin: '1rem 0',
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
        },
        palette: {
            mode: 'light',
            primary: {
              main: '#715596',
            },
            secondary: {
              main: '#208080',
            },
        },
    });
    return (
        <>
          <Head>
            <title>{title ? `${title} - Sanity Amazona` : 'Sanity Amazona'}</title>
            {description && <meta name="description" content={description}></meta>}
          </Head>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar position="static" sx={classes.appbar}>
                  <Toolbar sx={classes.toolbar}>
                      <NextLink href="/" passHref>
                        <Link>
                          <Typography sx={classes.brand}>AnimeStop</Typography>
                        </Link>
                  </NextLink>
                  </Toolbar>
              </AppBar>
              <Container component='main' sx={classes.main}>
                  {children}
              </Container>
              <Box component='footer' sx={classes.footer}>
                  <Typography>All rights reserved.</Typography>
              </Box>
          </ThemeProvider>
        </>
    )
}
