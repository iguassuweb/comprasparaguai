import React, { useState, useEffect, useRef } from "react";
const _ = require('lodash')
import { motion, useAnimation } from 'framer-motion'
import { Box, Text, Button, Paper, Image, IconButton, Dialog } from "../core"
import { StoryDialog } from "./StoryDialog"
import api from '../../api'


export const WebStories = ({ page }) => {

  const { webStories: stories } = page

  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef()
  const xPos = useRef(0)
  const animation = useAnimation();

  useEffect(() => {
    setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [stories])

  const [storyUrl, setStoryUrl] = useState(false);

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
    <Box>
      <Text variant='h1' sx={{ display: { md: 'none', lg: 'none', xl: 'none' }, alignSelf: 'start', marginInline: { xs: '1.5rem', sm: '3.5rem' }, marginTop: 5, color: '#1E3460' }}>Webstories</Text>
      <Box sx={styles.container}>
        <IconButton sx={styles.button} onClick={onLeftClick}>
          <Image
            src={`/leftArrowIcon.svg`}
            layout='fill'
            alt='Voltar'
          />
        </IconButton>
        <Box sx={styles.mobileStoriesContainer} ref={carousel}>
          <motion.div drag='x' animate={animation} onUpdate={onUpdate} dragDirectionLock dragConstraints={{ right: 0, left: -carouselWidth }} whileTap={{ cursor: 'grabbing' }} style={{ flexDirection: 'row', display: 'flex', '&:active': { cursor: 'grabbing' } }} transition={{ bounce: 0 }}>
            {stories.map((story, index) => (
              <Paper elevation={4} sx={styles.paperContainer} key={`story${index}`}>
                <Button onClick={() => setStoryUrl(story.url)} sx={styles.storyBottun}>
                  <Image
                    src={`${story.thumbUrl}`}
                    alt={story.title}
                    layout='fill'
                  />
                  <Box sx={styles.textContainer}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      {story.title}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>
                      {story.subtitle}
                    </Text>
                  </Box>
                </Button>
              </Paper>
            ))}
          </motion.div>
        </Box>
        <IconButton sx={styles.button} onClick={onRightClick}>
          <Image
            src={`/rightArrowIcon.svg`}
            layout='fill'
            alt='Avançar'
          />
        </IconButton>
        <StoryDialog url={storyUrl} open={storyUrl} handleClose={() => setStoryUrl(false)} />
      </Box>
    </Box>
  )
}


const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: { xs: 0, sm: 0, md: '1.5rem', lg: '2.5rem', xl: '9rem' },
    paddingRight: { xs: 0, sm: 0, md: '1.5rem', lg: '2.5rem', xl: '9rem' },
    marginBlock: 4
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
  paperContainer: {
    marginInline: '0.8rem',
    marginBlock: '2rem',
    borderRadius: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    minWidth: 150,
    position: 'relative', 
    '&:hover':{
      transform: 'scale(1.1)',
    },
    transition: '.3s ease-in-out'
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    textTransform: "none",
    textAlign: 'start',
    color: '#FFFFFF'
  },
  button: {
    width: '2rem',
    height: '2rem',
    alignSelf: 'center',
    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
    marginInline: '1rem',
  },
  image: {
    minHeight: '40rem',
    width: '30rem',
    padding: 40,
    borderRadius: '50%'
  },
  innerCarousel: {
    display: 'flex',
  },
  storyBottun: {
    width: 150,
    height: 200,
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10%'
  }
}