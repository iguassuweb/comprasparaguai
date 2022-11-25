import React, { useState, useEffect, useRef } from "react";
const _ = require('lodash')
import { motion, useAnimation } from 'framer-motion'
import { Box, Text, Button, Paper, Image, IconButton } from "../core"
import { StoryDialog } from "./StoryDialog"


export const WebStories = ({ page, customWidth = '100%', customStoryHeight = '350px', customStoryWidth = '240px' }) => {

  let stories = page?.webStories

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
    <Box sx={{ maxWidth: { xs: "800px", md: "96%" }, }} >
      <Text variant='h1' sx={{ display: { md: 'none', lg: 'none', xl: 'none' }, alignSelf: 'start', marginInline: { xs: '1.5rem', sm: '3.5rem' }, marginTop: 5, color: '#1E3460' }}>Webstories</Text>
      <Box sx={[styles.container, { width: customWidth }]}>
        <IconButton sx={styles.button} onClick={onLeftClick}>
          <Image
            src={`/leftArrowIcon.svg`}
            layout='fill'
            alt='Voltar'
          />
        </IconButton>
        <Box sx={styles.mobileStoriesContainer} ref={carousel}>
          <motion.div drag='x' animate={animation} onUpdate={onUpdate} dragDirectionLock dragConstraints={{ right: 0, left: -carouselWidth }} whileTap={{ cursor: 'grabbing' }} style={{ flexDirection: 'row', display: 'flex', '&:active': { cursor: 'grabbing' } }} transition={{ bounce: 0 }}>
            {!!stories && stories.map((story, index) => (
              <Paper elevation={4} sx={[styles.paperContainer, { minHeight: customStoryHeight, minWidth: customStoryWidth }]} key={`story${index}`}>
                <Button onClick={() => setStoryUrl(story.url)} sx={[styles.storyButton, { width: customStoryWidth, height: customStoryHeight, }]}>
                  <Box className='image' sx={{
                    width: customStoryWidth,
                    height: customStoryHeight,
                    borderRadius: '6%',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <Image
                      src={story.thumbUrl}
                      alt={story.title}
                      layout='fill'
                    />
                  </Box>
                  <Box sx={styles.textContainer}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>
                      {story.title}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '400' }}>
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
    </Box >
  )
}


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: { xs: 0, sm: 0, md: '1rem', lg: '1rem', xl: '0' },
    paddingRight: { xs: 0, sm: 0, md: '1rem', lg: '1rem', xl: '0' },

  },
  storiesContainer: {
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '20px',
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
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    padding: 2,
    textTransform: "none",
    textAlign: 'start',
    color: '#FFFFFF',
    '&:hover': {
      '& .image': {
        filter: "brightness(0.9)",
        transform: 'scale(1.02)',
      }
    },
  },
  button: {
    width: '2.813rem',
    height: '2.813rem',
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
  storyButton: {
    padding: 0,
    display: 'block',
    overflow: 'hidden',
    borderRadius: '6%',
    overflow: 'hidden',
    '&:hover': {
      '& .image': {
        filter: "brightness(0.9)",
        transform: 'scale(1.02)',
        transition: 'all .3s ease-in-out',
      }
    },
  }
}