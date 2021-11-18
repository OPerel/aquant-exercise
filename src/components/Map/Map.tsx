import React from 'react';
import ReactBingMap from "@3acaga/react-bing-maps";

interface Props {

}

const Map: React.FC<Props> = () => {
  return (
    <div style={{height: '700px'}}>
      <ReactBingMap apiKey={process.env.REACT_APP_BING_API_KEY as string}>
        {/*<Pushpin location={start} />*/}

        {/*<Polyline path={[start, end]} />*/}

        {/*<Pushpin location={end} />*/}
      </ReactBingMap>
    </div>
  );
};

export default Map;