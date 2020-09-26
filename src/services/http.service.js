import axiosInstance from "../shared/http-common";

class DataService {

  login(){
    return axiosInstance.get("https://api.spotify.com/v1/me" )
  }
}

export default new DataService();