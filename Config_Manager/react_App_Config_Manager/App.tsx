import { useEffect, useState } from "react";

// Datentyp für einen Post
interface Post {
  id: number;
  datum: string;
  wetter: string;
}

const MyComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [ausgewaehlterWert, setAusgewaehlterWert] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:1080/testdaten")
      .then((res) => res.json())
      .then((res: Post[]) => {
        setPosts(res);
        console.log({ res });
      })
      .catch((err) => console.error("Fehler beim Laden der Testdaten:", err));
  }, []);

  const handleClick = (datum: string) => {
    setAusgewaehlterWert(datum);
  };

  return (
    <div>
      {posts.map((item) => (
        <button key={item.wetter} onClick={() => handleClick(item.wetter)}>
          {item.datum}
        </button>
      ))}

      {ausgewaehlterWert && <p>Das Wetter: {ausgewaehlterWert}</p>}
    </div>
  );
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:1080/testdaten")
      .then((res) => res.json())
      .then((res: Post[]) => {
        setPosts(res);
        console.log({ res });
      })
      .catch((err) => console.error("Fehler beim Laden der Testdaten:", err));
  }, []);

  if (!posts.length) {
    return <p>Lade Daten...</p>;
  }

  return (
    <div>
      <h1>Das Wetter</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="datum">{post.datum}:</div>
            <div className="wetter">{post.wetter}</div>
            <br />
          </div>
        ))}
      </div>

      <div>
        <h2>Button</h2>
        <MyComponent />
      </div>
    </div>
  );
};

export default Posts;