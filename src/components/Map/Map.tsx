import React from "react";
import ReactBingMap, { Polyline, Pushpin } from "@3acaga/react-bing-maps";
import { Coordinate } from "../../interfaces";

interface Props {
  coordinates: Coordinate[];
}

const Map: React.FC<Props> = ({ coordinates }) => {
  const length = coordinates.length;
  return (
    <div style={{ height: "700px" }}>
      <ReactBingMap apiKey={process.env.REACT_APP_BING_API_KEY as string}>
        {coordinates.map((coordinate) => {
          return (
            <Pushpin
              key={`${coordinate.longitude}-${coordinate.latitude}`}
              location={coordinate}
            />
          );
        })}
        {length >= 2 &&
          coordinates.map((coordinate, idx) => {
            return (
              idx < length - 1 && (
                <Polyline
                  key={`${idx}-${coordinate.longitude}-${coordinate.latitude}`}
                  path={[coordinate, coordinates[idx + 1]]}
                />
              )
            );
          })}
      </ReactBingMap>
    </div>
  );
};

export default Map;
