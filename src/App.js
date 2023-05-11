import Header from "./komponent/Header";
// import Main from "./komponent/main";
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/endpoint/react/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      {data.length > 0 && data[0].title};
      {data.length > 0 && data[0].text}
      {data.length > 0 && data[0].title}

    </div>
  );
}

export default App;
