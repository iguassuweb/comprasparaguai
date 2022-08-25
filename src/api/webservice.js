import axios from "axios";
import api from ".";

export const getPages = async () => {
  try {
    const res = await api.get(`/pages`);
    // console.log('aqui', res.data.pages);
    return res.data.pages;
  } catch (error) {
    console.error(error);
  }
};

export const getScheduleVideos = async () => {
  try {
    const res = await api.get(`/scheduleYoutube`);
    return res.data.scheduleVideos[0].days;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const res = await api.get(`/categories`);
    return res.data.categories;
  } catch (error) {
    console.error(error);
  }
};

export const getTours = async () => {
  try {
    const res = await axios.get(
      `https://sistema.loumarturismo.com.br/gestorsites/Api/Atrativo/GetListaAtrativosSite`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getYoutubePlaylist = async () => {
  try {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLqRVoFfSrbW2M6TlXZsor6IMvYzVw6mnR&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
