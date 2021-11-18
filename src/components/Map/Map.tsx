import React from 'react';
import ReactBingMap, {Pushpin} from "@3acaga/react-bing-maps";
import {Coordinate} from "../../interfaces";

interface Props {
  coordinates: Coordinate[]
}

const Map: React.FC<Props> = ({ coordinates }) => {
  return (
    <div style={{height: '700px'}}>
      <ReactBingMap apiKey={process.env.REACT_APP_BING_API_KEY as string}>
        {coordinates.map(coordinate => {
          return <Pushpin location={coordinate} />
        })}
      </ReactBingMap>
    </div>
  );
};

export default Map;