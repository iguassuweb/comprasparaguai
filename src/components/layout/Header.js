import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Text,
  Image,
  Stack,
  Box,
  MenuItem,
  IconButton,
  Button,
  Drawer,
  Divider,
} from "../core";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
  const [showMenu, setshowMenu] = useState(false);

  const socialNetwork = [
    { title: "Intagram", src: "/InstagramIcon.svg", url: "/", width: 18, height: 18 },
    { title: "Youtube", src: "/YoutubeIcon.svg", url: "/", width: 24, height: 26 },
    { title: "Facebook", src: "/FacebookIcon.svg", url: "/", width: 18, height: 18 },
    { title: "Twitter", src: "/TwitterIcon.svg", url: "/", width: 14, height: 15 },
  ];

  const mobileSocialNetwork = [
    { title: "Intagram", src: "/InstagramLightBlueIcon.svg", url: "/", width: 18, height: 18 },
    { title: "Youtube", src: "/YoutubeLightBlueIcon.svg", url: "/", width: 24, height: 26 },
    { title: "Facebook", src: "/FacebookLightBlueIcon.svg", url: "/", width: 18, height: 18 },
    { title: "Twitter", src: "/TwitterLightBlueIcon.svg", url: "/", width: 14, height: 15 },
  ];

  const routes = [
    { title: "Home", url: "/" },
    { title: "Transportes", url: "/transportes" },
    { title: "Passeios", url: "/passeios-em-foz-do-iguacu" },
    { title: "Hotéis", url: "/hoteis" },
    { title: "Blog", url: "/blog" },
  ];

  const mobileRoutes = [
    { title: "Home", url: "/" },
    { title: "Transportes", url: "/transportes" },
    { title: "O que fazer em foz?", url: "/passeios-em-foz-do-iguacu" },
    { title: "Sobre a Loumar", url: "/hoteis" },
    { title: "Carrinho", url: "/blog" },
    { title: "Meus pedidos", url: "" },
    { title: "Passeios", url: "" },
    { title: "Hotéis", url: "" },
    { title: "Passaporte", url: "" },
    { title: "Compras Paraguai", url: "" },
    { title: "Blog", url: "" },
  ];

  const { pathname } = useRouter();

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.socialToolBar} style={{ minHeight: 40 }}>
        <Stack direction="row" spacing={2} >
          <Text>Reservas: </Text>
          <Image
            src={`/PhoneIcon.svg`}
            width={20}
            height={16}
            alt="Telefone"
          />
          <Text style={{ marginLeft: '0.4rem' }}>(45) 3521-4000</Text>
          <Text style={{ marginLeft: '1rem' }}> - </Text>
          <Image
            src={`/WhatsappIcon.svg`}
            width={20}
            height={16}
            alt="Whatsapp"
          />
          <Text style={{ marginLeft: '0.4rem' }}>Whatsapp</Text>
        </Stack>
        <Stack direction="row" spacing={2} style={{ alignItems: "center" }}>
          <Text>Redes sociais: </Text>
          {socialNetwork.map((item) => (
            <Link key={`socialNetwork${item.title}`} href={item.url}>
              <a style={{ width: 20, height: 20 }}>
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
      </Toolbar>
      <Toolbar sx={styles.toolBar} style={{ minHeight: 80 }}>
        <Box sx={styles.mobileMenu}>
          <IconButton onClick={() => setshowMenu(true)}>
            <MenuIcon sx={styles.mobileMenuIcon} />
          </IconButton>
          <Drawer
            open={showMenu}
            onClose={() => setshowMenu(false)}
          >
            <Box sx={{ width: 350, height: '100%' }}>
              <Toolbar sx={{ backgroundColor: "#1E3460", minHeight: 80 }}>
                <Box sx={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', flex: 1 }}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src={`/LoumarTurismoLogo.svg`}
                        width={58}
                        height={48}
                        alt="Logotipo Loumar Turismo"
                      />
                    </a>
                  </Link>
                  <IconButton onClick={() => setshowMenu(false)} color="inherit">
                    <CloseIcon sx={styles.mobileMenuIcon} />
                  </IconButton>
                </Box>
              </Toolbar>
              {mobileRoutes.map((route) => (
                <Link key={`route${route.title}`} href={route.url} passHref>
                  <MenuItem
                    selected={route.url === pathname ? true : false}
                    sx={{ fontSize: 16, flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingRight: 0 }}
                    onClick={() => setshowMenu(false)}
                  >
                    {route.title}
                    {route.url === pathname && <Box sx={{
                      backgroundColor: '#192C52',
                      right: 0,
                      width: 4,
                      height: 40,
                      borderBottomLeftRadius: 8,
                      borderTopLeftRadius: 8,
                    }} />}
                  </MenuItem>
                </Link>
              ))}
              <Box sx={{ paddingBlock: 2, marginTop: 'auto' }}>
                <Divider />
                <Box sx={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', margin: 2 }}>
                  <Image
                    src={`/PhoneLightBlackIcon.svg`}
                    width={20}
                    height={16}
                    alt="Telefone"
                  />
                  <Text style={{ marginLeft: '0.4rem' }}>(45) 3521-4000</Text>
                </Box>
                <Box sx={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                  <Image
                    src={`/WhatsappLightBlackIcon.svg`}
                    width={20}
                    height={16}
                    alt="Whatsapp"
                  />
                  <Text style={{ marginLeft: '0.4rem' }}>Whatsapp</Text>
                </Box>
                <Box sx={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                  {mobileSocialNetwork.map((item) => (
                    <Link key={`socialNetwork${item.title}`} href={item.url}>
                      <a style={{ width: 20, height: 20, marginInline: 10 }}>
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
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Box>
        <Link href="/" passHref>
          <a style={{ minWidth: 58 }}>
            <Box sx={styles.logoContainer}>
              <Image
                src={`/logo-loumar.png`}
                layout="fill"
                objectFit="contain"
                alt="Logotipo Loumar Turismo"
              />
              {/* <Box sx={styles.logoText}>
            <Text>Especialista em</Text>
            <Text>Foz do Iguaçu</Text>
          </Box> */}
            </Box>
          </a>
        </Link>
        <Stack direction="row" sx={styles.desktopMenuContainer}>
          {routes.map((page) => (
            <Link key={`page${page.title}`} href={page.url} passHref>
              <Button sx={[styles.desktopMenuItems, page.url === pathname ? { borderBottom: '3px solid white' } : {}]}>
                {page.title}
              </Button>
            </Link>
          ))}
        </Stack>
        {/* <Box sx={styles.cartContainer}>
          <Text> Cart </Text>
            <Text> Meus Pedidos</Text>
        </Box> */}
      </Toolbar >
    </AppBar >
  );
};

const styles = {
  appBar: {
    width: "100vw",
    height: { xs: 32, sm: 32, md: 72, lg: 72, xl: 72 },
    padding: 0,
    backgroundColor: "#E5E5E5",
    marginBottom: 6,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100
  },
  socialToolBar: {
    justifyContent: "space-between",
    backgroundColor: "#1E3460",
    margin: "auto",
    width: "100%",
    display: { xs: "none", sm: "none", md: "flex" },
    padding: { xs: "0px 120px 0px 70px" },
  },
  toolBar: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    backgroundColor: "#192C52",
    margin: "auto",
    width: "100%",
    padding: { xs: "0px 20px 0px 20px", md: "0px 120px 0px 120px" },
    flexGrow: 1,
  },
  mobileMenu: {
    display: { xs: "flex", sm: "flex", md: "none" },
    position: "absolute",
    left: 10
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "180px",
    height: "200px",
    position: "relative",
    marginRight: "20px",
  },
  logoText: {
    whiteSpace: 'nowrap',
    margin: "0px 0px 0px 10px",
    borderLeft: '1px solid #FFFFFF',
    padding: "0px 0px 0px 10px",
    alignSelf: 'center'
  },
  mobileMenuIcon: {
    width: 30,
    height: 30,
    color: "#FFFFFF",
  },
  desktopMenuContainer: {
    display: { xs: "none", sm: "none", md: "flex" }
  },
  desktopMenuItems: {
    mx: 2,
    color: "inherit",
    fontSize: 14,
    fontWeight: 400,
    textTransform: "none",
    //   '&:hover': { 
    //     color: '#00A2AE'
    // },
    borderRadius: 0,
    borderBottomRightRadius: "2px",
    borderBottomLeftRadius: "2px"
  },
  cartContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    display: 'flex'
  }
};
