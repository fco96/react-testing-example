import { useEffect, useState } from "react";
import { DogCard } from "../Components/DogCard/DogCard";
import { getDogs, getDog } from "../Services/Dogs.service";

const INITIAL_DOGS = 3;

export const DogsView = () => {
  const [dogs, setDogs] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    getDogs(INITIAL_DOGS).then((resp) => {
      const dogeNodes = resp.map((u) => {
        return (
          <div key={u} className="mt-4">
            <div className="columns is-centered">
              <div className="column is-5">
                <DogCard url={u} />
              </div>
            </div>
          </div>
        );
      });

      setDogs(dogeNodes);
    });
  }, []);

  const addDog = () => {
    getDog().then((x) => {
      setDogs((state) => [...state, dogFormatter(x)]);
    });
  };

  const dogFormatter = (url: string) => (
    <div key={url} className="mt-4">
      <div className="columns is-centered">
        <div className="column is-5">
          <DogCard url={url} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="columns">
        <div className="column">
          <button onClick={addDog}>Add dog</button>
        </div>
      </div>
      {dogs}
    </div>
  );
};
