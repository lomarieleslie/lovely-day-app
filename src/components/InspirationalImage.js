import { useState, useEffect } from "react";
import axios from "axios";



const InspirationalPhoto = () => {
const [photo, setPhoto] = useState([]);


  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: 'json',
      params: {
        query: 'motivational-quotes',
        collections: '9497819',
        per_page: 50,
        client_id: "W57PpYfHVnQtbqOYYceME-F10pLEm_rvyHvhyhwC1a8"
      } 
    }).then((response) => {
      console.log(response);
     setPhoto(response.data.urls.small);

    }).catch((error) => {
      console.log(error);
    })


  },[]);

  return (
      <div className="inspirational-image">

         <img src={photo} alt='inspirational image' />

      </div>
  )


}




export default InspirationalPhoto;