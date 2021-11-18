import React, {useState} from 'react';

interface Props {

}

interface Coordinates {
  lon: string;
  lat: string
}

const LocationForm: React.FC<Props> = () => {

  const [coordinate, setCoordinate] = useState<Coordinates>({lon: '', lat: ''});
  const handleAddPoint = () => {}

  return (
    <div>
      <form>
        <h3>Enter coordinates</h3>
        <label>
          Longitude:
          <input
            type="number"
            value={coordinate.lon}
            onChange={e => setCoordinate({ ...coordinate, lon: e.target.value })}
          />
        </label>

        <label>
          Latitude:
          <input
            type="number"
            value={coordinate.lat}
            onChange={e => setCoordinate({ ...coordinate, lat: e.target.value })}
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