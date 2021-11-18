import React, {useState} from 'react';
import { Coordinate } from "../../interfaces";

interface Props {
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinate[]>>
}

const LocationForm: React.FC<Props> = ({ setCoordinates }) => {

  const [coordinate, setCoordinate] = useState<Coordinate>({longitude: 0, latitude: 0});
  const handleAddPoint = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCoordinates(prev => {
      return [
        ...prev,
        coordinate
      ]
    })
  }

  return (
    <div>
      <form>
        <h3>Enter coordinates</h3>
        <label>
          Longitude:
          <input
            type="number"
            value={coordinate.longitude}
            onChange={e => setCoordinate({ ...coordinate, longitude: Number(e.target.value) })}
          />
        </label>

        <label>
          Latitude:
          <input
            type="number"
            value={coordinate.latitude}
            onChange={e => setCoordinate({ ...coordinate, latitude: Number(e.target.value) })}
          />
        </label>

        <button
          onClick={handleAddPoint}
        >
          Add point
        </button>
      </form>

    </div>
  );
};

export default LocationForm;