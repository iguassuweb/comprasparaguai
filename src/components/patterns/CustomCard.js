

import { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, Text, Box, CardContent, CardActions } from "../core";

import Image from 'next/image';


export const CustomCard = props => {
  const {
    cardMaxWidth = {},
    cardMaxHeight = {},
    cardContentSx = {},
    cardActionSx = {},
    cardSx,
    media = false,
    badge = false,
    cardMedia = { component, heightMedia, srcMedia, altMedia, widthMedia },
    content = true,
    title = '',
    titleSx = {},
    description = '',
    descriptionSx = {},
    actionsContent = false,
    buttonText = '',
    price = '',
    buttonSx = {},
    priceSx = {},
    handleClick = () => { },
    handleHover = false,
    heightPicture = 160,
    ContentDetails
  } = props

  const { component = 'img', heightMedia, widthMedia = 280, srcMedia = '/LoumarTurismoLogo.svg', altMedia = '' } = cardMedia;

  const [isShown, setIsShown] = useState(false);

  const formatedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  return (
    <Card sx={[
      cardSx, {
        maxWidth: cardMaxWidth,
        minWidth: cardMaxWidth,
        maxHeight: cardMaxHeight,
        minHeight: cardMaxHeight
      }]}
      onMouseEnter={handleHover ? () => setIsShown(true) : null}
      onMouseLeave={handleHover ? () => setIsShown(false) : null}
    >
      {badge && <Badge />}
      {media &&
        <Box sx={{ position: 'relative', height: heightPicture, width: { widthMedia } }}>
          <Image
            src={srcMedia}
            alt={altMedia}
            layout='fill'
            ObjectFit='cover'
            loading='lazy'
          />
        </Box>
      }
      {content && (
        <CardContent sx={[cardContentSx, handleHover ? {
          bottom: isShown ? '30%' : '24%',
          height: {
            xs: isShown ? '140px' : '90px',
            md: isShown ? '120px' : '70px'
          }
        } : {}]}>
          {title !== '' && (
            <Text gutterBottom sx={[titleSx, styles.cardTitle]} component="div" variant='h4'>
              {title}
            </Text>
          )}
          {ContentDetails && (
            <ContentDetails />
          )}
          {(isShown && description) || (!handleHover && description) && (
            <Box>
              {description !== '' && (
                <Text >
                  {description}
                </Text>
              )}
            </Box>
          )}
        </CardContent>
      )}
      {actionsContent && (
        <CardActions sx={cardActionSx}>
          <Text sx={priceSx}>{formatedPrice}</Text>
          <Button onClick={handleClick} size="small" sx={[buttonSx, { '&:hover': { background: 'linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)' }, transition: '.2s ease-in-out' }]}>{buttonText}</Button>
        </CardActions>
      )}
    </Card>
  );
}
const Badge = () => (
  <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
    <Box sx={{
      background: '#FFED4CE5',
      position: 'fixed',
      top: 0,
      zIndex: '1',
      padding: '4px 10px',
      borderRadius: '0 0 8px 8px'
    }}>
      <Text sx={{ color: '#1E3460' }}>Loumar Indica</Text>
    </Box>
  </Box>
)

const styles = {
  cardTitle: {
    maxHeight: '100%',
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
}