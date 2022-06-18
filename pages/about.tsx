import { type } from "os";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  name: string;
};

export default function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error :(</p>
  ) : (
    <ul>
      {data.map((user: Props) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
