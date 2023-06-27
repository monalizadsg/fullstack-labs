const Card = (props) => {
  const { name, origin, image } = props;
  return (
    <div className="col-3">
      <div className="card">
        <img src={image} alt="Rick Sanchez" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log("Oh noes!", err));
  }, []);

  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">Rick and Morty</h1>
      </nav>
      <div>
        <h2>Characters</h2>
        <div className="row">
          {data && data.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
