import React from 'react'

function getData() {
    fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log("result :>> ", result);
        });
}

export default getData;

/* const card = () => {
  const result = {{result}};

  return (
    <div className="users">
      {result.map((name) => (
        <div className="user">{name}</div>
      ))}
    </div>
  );
};

export default card; */