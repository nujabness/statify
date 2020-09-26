import axiosInstance from "../shared/http-common";

class DataService {

  login(){
    return axiosInstance.get("https://api.spotify.com/v1/me" )
  }
  getRecentlyPlayedtracks(){
    return axiosInstance.get("https://api.spotify.com/v1/me/player/recently-played")
  }
  getTopArtists(){
    return axiosInstance.get('https://api.spotify.com/v1/me/top/artists')
  }
  getTopTracks(){
    return axiosInstance.get('https://api.spotify.com/v1/me/top/tracks')
  }
}

export default new DataService();