import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Box, Text, IconButton } from '../../core'
import { CustomCard } from '../CustomCard'

export const FeaturedTours = ({ passeios }) => {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef()
  const xPos = useRef(0)
  const animation = useAnimation();

    useEffect(() => {
        setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [passeios])

  function onLeftClick() {
    const newXPosition = xPos.current + 900;

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    });
  }

  function onRightClick() {
    const newXPosition = xPos.current - 900;

    animation.start({
      x: newXPosition < -carouselWidth ? -carouselWidth : newXPosition,
    });
  }

  function onUpdate(latest) {
    xPos.current = latest.x;
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ flexGrow: 1, maxWidth: 1200, width: '100%', my: 2 }}>
        <Box sx={{ my: 4, paddingInline: 2 }}>
          <Text variant="h4" sx={{ fontWeight: 600 }}>Mais Vendidos</Text>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ height: 8, width: 100, borderRadius: 1, backgroundColor: '#00a2ae', my: 2, marginRight: 1 }} />
            <Box sx={{ height: 8, width: 100, borderRadius: 1, backgroundColor: '#cfd3dc', my: 2 }} />
          </Box>
        </Box>
        <Box sx={styles.container}>
          <IconButton sx={[styles.button, {left: '8%'}]} onClick={onLeftClick}>
            <Image
              src={`/leftArrowIcon.svg`}
              layout='fill'
              alt='Voltar'
            />
          </IconButton>
          <Box sx={styles.mobileStoriesContainer} ref={carousel}>
            <motion.div drag='x' animate={animation} onUpdate={onUpdate} dragDirectionLock dragConstraints={{ right: 0, left: -carouselWidth }} whileTap={{ cursor: 'grabbing' }} style={{ flexDirection: 'row', display: 'flex', '&:active': { cursor: 'grabbing' } }} transition={{ bounce: 0 }}>
              {!!passeios &&
                passeios.filter((item, index) => index < 8).map((passeio, idx) => (
                  <Box sx={{ padding: 2 }} key={`indexPasseios:${idx}`}>
                    <CustomCard
                      cardMaxHeight={{
                        xs: 320, md: 280
                      }}
                      cardMaxWidth={{
                        xs: 340, md: 260
                      }}
                      cardSx={{
                        borderRadius: '10px',
                        filter: 'drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1))',
                      }}
                      cardActionSx={{
                        justifyContent: 'space-around',
                        margin: { xs: '5em 0', md: '3em 0' }
                      }}
                      cardContentSx={{
                        background: '#fff',
                        position: 'absolute',
                        borderRadius: '8px',
                        width: '100%',
                        transition: '.2s cubic-bezier(0, 0, 0.03, 1.01)',
                      }}
                      badge={true}
                      title={passeio.dsTitulo}
                      titleSx={{
                        fontSize: "16px",
                        textTransform: "capitalize",
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#323232",
                      }}
                      media={true}
                      priceSx={{
                        fontSize: "20px",
                        color: "#323232",
                        fontSize: "18px",
                      }}
                      price={passeio.vlVenda}
                      buttonSx={{
                        color: "#fff",
                        background: "#007A73",
                        height: "40px",
                        width: "102px",
                      }}
                      actionsContent={true}
                      buttonText="Detalhes"
                      cardMedia={{
                        srcMedia: 'https://loumarturismo.com.br/' + passeio.Fotos[0].Foto.dsremotepath,
                        altMedia: passeio.dsTitulo,
                        widthMedia: "255px",
                        heightMedia: "305px",
                      }}
                      description={passeio.dsSubTitulo}
                      descriptionSx={{
                        opacity: 0,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                      handleHover={true}
                    />
                  </Box>
                ))}
            </motion.div>
          </Box>
          <IconButton sx={[styles.button, {right: '8%'}]} onClick={onRightClick}>
            <Image
              src={`/rightArrowIcon.svg`}
              layout='fill'
              alt='Avançar'
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: { xs: 0, sm: 0, md: '20px', lg: '2.5rem', xl: '0' },
    paddingRight: { xs: 0, sm: 0, md: '20px', lg: '2.5rem', xl: '0' },
    // marginBlock: 4
  },
  storiesContainer: {
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mobileStoriesContainer: {
    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    cursor: 'grab'
  },
  button: {
    width: '2rem',
    height: '2rem',
    alignSelf: 'center',
    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
    marginInline: '1rem',
    position: 'absolute',
    zIndex: '2'
  }
}