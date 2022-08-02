import React, { useState } from "react";
import { Button, Image, Box } from "../core";

export const VideoButton = ({
  width = 565,
  height = 320,
  urlVideo,
  urlThumb,
  title = "Loumar Turismo",
  handleClick,
}) => {
  const [showYoutube, setShowYoutube] = useState(false);

  return (
    <>
      {showYoutube && (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${urlVideo}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {!showYoutube && (
        <Button
          onClick={() => (handleClick ? handleClick() : setShowYoutube(true))}
          style={{ padding: 0 }}
        >
          <Box sx={styles.mainVideoThumb}>
            <Image
              src={`/play-button.svg`}
              width={200}
              height={50}
              alt={`Play Video - ${title}`}
            />
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Image
              src={`${urlThumb}`}
              objectPosition="center"
              width={645}
              height={400}
              alt={`Video - ${title}`}
            />
          </Box>
        </Button>
      )}
    </>
  );
};

const styles = {
  mainVideoThumb: {
    cursor: "pointer",
    zIndex: 2,
    position: "absolute",
    display: "block",
    margin: "auto",
    opacity: 0.5,
  },
};
