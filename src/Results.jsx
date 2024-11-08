/* eslint-disable react/prop-types */
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <dir className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
              key={pet.id}
            />
          );
        })
      )}
    </dir>
  );
};

export default Results;
