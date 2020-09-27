import axiosInstance from "../shared/http-common";

class DataService {

  login(){
    return axiosInstance.get("https://api.spotify.com/v1/me" )
  }
  getRecentlyPlayedtracks(){
    return axiosInstance.get("https://api.spotify.com/v1/me/player/recently-played")
  }
  getTopArtists(){
    return axiosInstance.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=30')
  }
  getTopTracks(){
    return axiosInstance.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=30')
  }
}

export default new DataService();