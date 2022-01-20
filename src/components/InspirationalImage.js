import { useState, useEffect } from "react";
import axios from "axios";



const InspirationalPhoto = () => {
const [photo, setPhoto] = useState([]);


  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/collections/9497819/photos",
      method: "GET",
      dataResponse: 'json',
      params: {
        query: 'motivational-quotes',
        collections: '9497819',
        per_page: 50,
        client_id: "W57PpYfHVnQtbqOYYceME-F10pLEm_rvyHvhyhwC1a8"
      } 
    }).then((response) => {
     console.log(response.data[0].urls.small)
     
     setPhoto(response.data[0].urls.small);

    }).catch((error) => {
      console.log(error);
    })


  },[]);

  return (
      <div>

         <setPhoto />

      </div>
  )


}




export default InspirationalPhoto;