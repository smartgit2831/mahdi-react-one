import React from 'react'
import GoogleMapReact from 'google-map-react'

    const AnyReactComponnet = ({text})=> <div>{text}</div>;
    const map = () => {
        const defaultProps = {
            center:{
                lat: 59.95,
                lng: 30.33
            },
            zoom:11
        };
        return (
          <div style={{height: "50vh", width:"100%"}}>
            <GoogleMapReact bootstrapURLKeys={{key: '52.887702'}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
               <AnyReactComponnet lat={35.7036} lng={51.3515} text={"my markr"}/> 
            </GoogleMapReact>
        
          </div>
        )
    }
    export default map;

