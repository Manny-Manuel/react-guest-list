import { useEffect, useState } from 'react';

function DataFetching(props) {
  const apiUrl =
    'https://express-guest-list-api-memory-data-store.manny-manuel.repl.co/guests/';

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data);
    }
    fetchUsers().catch((error) => console.log(error));
  });

  return;
}

export default DataFetching;
