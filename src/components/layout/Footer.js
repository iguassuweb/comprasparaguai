import Link from "next/link";
import {
    Text,
    Div,
    Grid, Button, Stack, Box
} from '../../components/core'
import Image from 'next/image'
export const Footer = (props) => {

    const socialNetwork = [
        { title: "Intagram", src: "/InstagramIcon.svg", url: "/", width: 30, height: 30 },
        { title: "Youtube", src: "/YoutubeIcon.svg", url: "/", width: 36, height: 38 },
        { title: "Facebook", src: "/FacebookIcon.svg", url: "/", width: 30, height: 30 },
        { title: "Twitter", src: "/TwitterIcon.svg", url: "/", width: 24, height: 25 },
    ];

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: '#1E3460',
            color: '#FFFFFF',
            width: '100%',
            paddingInline: '5rem',
            paddingBlock: {xs: '5rem', md: '8rem'}
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} mdlg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" sx={{ justifyContent: { xs: "center", mdlg: 'start' }, minWidth: 122 }}>
                        <Link href="/" passHref>
                            <a>
                                <Image
                                    src={`/LoumarTurismoLogo.svg`}
                                    width={122}
                                    height={101}
                                    alt="Logotipo Loumar Turismo"
                                />
                            </a>
                        </Link>
                    </Box>
                    <Box display="flex" sx={{ justifyContent: { xs: "center", mdlg: 'start'}, marginBlock: 2  }}>
                        <Stack direction="row" spacing={2} sx={{ alignItems: "center", marginBottom: '2rem'}}>

                            {socialNetwork.map((item) => (
                                <Link key={`socialNetwork${item.title}`} href={item.url}>
                                    <a style={{ width: 25, height: 25 }}>
                                        <Image
                                            layout='responsive'
                                            src={item.src}
                                            width={item.width}
                                            height={item.height}
                                            alt={item.title}
                                        />
                                    </a>
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                    <Box display="flex" sx={{ textAlign: { xs: "center", mdlg: 'start' }, justifyContent: { xs: "center", mdlg: 'start' }}}>
                        <Text sx={{ maxWidth: '25ch' }}>Lives as terças, quartas e quintas no nosso canal do Youtube</Text>
                    </Box>
                    <Stack direction="column" spacing={2} sx={{ display: { xs: 'none', sm: 'none' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", whiteSpace: 'nowrap' }}>
                            <Box sx={{ minWidth: 30 }}>
                                <Image
                                    src={`/PhoneIcon.svg`}
                                    width={30}
                                    height={26}
                                    alt="Telefone"
                                />
                            </Box>
                            <Text sx={{ marginLeft: '1rem' }}>(45) 3521-4000</Text>
                            <Text sx={{ margin: '0rem 1rem' }}> - </Text>
                            <Text>Telefone</Text>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", whiteSpace: 'nowrap' }}>
                            <Box sx={{ minWidth: 30 }}>
                                <Image
                                    src={`/WhatsappIcon.svg`}
                                    width={30}
                                    height={26}
                                    alt="Whatsapp"
                                />
                            </Box>
                            <Text sx={{ marginLeft: '1rem' }}>(45) 3521-4001</Text>
                            <Text sx={{ margin: '0rem 1rem' }}> - </Text>
                            <Text>Whatsapp</Text>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} mdlg={2.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'start' } }}>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            O que fazer em Foz?
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Sobre a Loumar
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Compras Paraguai
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            O que fazer em Foz?
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Hotéis
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} mdlg={2.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'start' } }}>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Passaporte Loumar
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Carrinho
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Transportes
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Transflix
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Home
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} mdlg={2.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'start' } }}>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Blog Loumar
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Roteiros
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Lorem Ipsum
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Contatos
                        </Button>
                    </Link>
                    <Link href={'/'} passHref>
                        <Button sx={styles.buttonText}>
                            Pagina Promocional
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid item sx={{ display: { md: 'none' }, marginTop: '2rem' }}>
                <Text sx={{ textAlign: 'center' }}>
                    © Loumar Turismo - Todos os Direitos Reservados.
                </Text>
            </Grid>

        </Box>
    )
}

const styles = {

    buttonText: {
        color: 'inherit',
        textTransform: "none",
        fontSize: 16,
        fontWeight: 400,
        LineHeight: 24,
        '&:hover': { 
            textDecoration: 'underline',
        }
    },
    mainText: {
        fontSize: 20,
        fontWeight: 400,
        LineHeight: 30
    }
}