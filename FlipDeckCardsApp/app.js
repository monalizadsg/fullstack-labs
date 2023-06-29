// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// Data:
const cards = [
  {
    id: 1,
    url: "img/AC.svg",
    showBack: false,
  },
  {
    id: 2,
    url: "img/AD.svg",
    showBack: false,
  },
  {
    id: 3,
    url: "img/AH.svg",
    showBack: false,
  },
  {
    id: 4,
    url: "img/AS.svg",
    showBack: false,
  },
  {
    id: 5,
    url: "img/2C.svg",
    showBack: false,
  },
  {
    id: 6,
    url: "img/2D.svg",
    showBack: false,
  },
  {
    id: 7,
    url: "img/2H.svg",
    showBack: false,
  },
  {
    id: 8,
    url: "img/2S.svg",
    showBack: false,
  },
  {
    id: 9,
    url: "img/3C.svg",
    showBack: false,
  },
  {
    id: 10,
    url: "img/3D.svg",
    showBack: false,
  },
  {
    id: 11,
    url: "img/3H.svg",
    showBack: false,
  },
  {
    id: 12,
    url: "img/3S.svg",
    showBack: false,
  },
  {
    id: 13,
    url: "img/4C.svg",
    showBack: false,
  },
  {
    id: 14,
    url: "img/4D.svg",
    showBack: false,
  },
  {
    id: 15,
    url: "img/4H.svg",
    showBack: false,
  },
  {
    id: 16,
    url: "img/4S.svg",
    showBack: false,
  },
  {
    id: 17,
    url: "img/5C.svg",
    showBack: false,
  },
  {
    id: 18,
    url: "img/5D.svg",
    showBack: false,
  },
  {
    id: 19,
    url: "img/5H.svg",
    showBack: false,
  },
  {
    id: 20,
    url: "img/5S.svg",
    showBack: false,
  },
  {
    id: 21,
    url: "img/6C.svg",
    showBack: false,
  },
  {
    id: 22,
    url: "img/6D.svg",
    showBack: false,
  },
  {
    id: 23,
    url: "img/6H.svg",
    showBack: false,
  },
  {
    id: 24,
    url: "img/6S.svg",
    showBack: false,
  },
  {
    id: 25,
    url: "img/7C.svg",
    showBack: false,
  },
  {
    id: 26,
    url: "img/7D.svg",
    showBack: false,
  },
  {
    id: 27,
    url: "img/7H.svg",
    showBack: false,
  },
  {
    id: 28,
    url: "img/7S.svg",
    showBack: false,
  },
  {
    id: 29,
    url: "img/8C.svg",
    showBack: false,
  },
  {
    id: 30,
    url: "img/8D.svg",
    showBack: false,
  },
  {
    id: 31,
    url: "img/8H.svg",
    showBack: false,
  },
  {
    id: 32,
    url: "img/8S.svg",
    showBack: false,
  },
  {
    id: 33,
    url: "img/9C.svg",
    showBack: false,
  },
  {
    id: 34,
    url: "img/9D.svg",
    showBack: false,
  },
  {
    id: 35,
    url: "img/9H.svg",
    showBack: false,
  },
  {
    id: 36,
    url: "img/9S.svg",
    showBack: false,
  },
  {
    id: 37,
    url: "img/TC.svg",
    showBack: false,
  },
  {
    id: 38,
    url: "img/TD.svg",
    showBack: false,
  },
  {
    id: 39,
    url: "img/TH.svg",
    showBack: false,
  },
  {
    id: 40,
    url: "img/TS.svg",
    showBack: false,
  },
  {
    id: 41,
    url: "img/JC.svg",
    showBack: false,
  },
  {
    id: 42,
    url: "img/JD.svg",
    showBack: false,
  },
  {
    id: 43,
    url: "img/JH.svg",
    showBack: false,
  },
  {
    id: 44,
    url: "img/JS.svg",
    showBack: false,
  },
  {
    id: 45,
    url: "img/QC.svg",
    showBack: false,
  },
  {
    id: 46,
    url: "img/QD.svg",
    showBack: false,
  },
  {
    id: 47,
    url: "img/QH.svg",
    showBack: false,
  },
  {
    id: 48,
    url: "img/QS.svg",
    showBack: false,
  },
  {
    id: 49,
    url: "img/KC.svg",
    showBack: false,
  },
  {
    id: 50,
    url: "img/KD.svg",
    showBack: false,
  },
  {
    id: 51,
    url: "img/KH.svg",
    showBack: false,
  },
  {
    id: 52,
    url: "img/KS.svg",
    showBack: false,
  },
];

function getCardsBackImage(url) {
  if (url.includes("C") || url.includes("S")) return "img/1B.svg";
  return "img/2B.svg";
}

// <Header />
function Header({ totalCards }) {
  return (
    <header>
      <h1>Playing Cards Game of {totalCards}</h1>
    </header>
  );
}

// <Card />
function Card({ id, url, onDelete, showBack, onHide }) {
  let backImageUrl = getCardsBackImage(url);
  return (
    <div className='card' key={id}>
      <button className='remove-card' onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className='hide-card' onClick={() => onHide(id)}>
        Hide
      </button>
      <div className={`${showBack ? "flipped" : " "} img-wrapper'`}>
        <img src={url} className='front' />
        {showBack && <img src={backImageUrl} className='back' />}
      </div>
    </div>
  );
}

// <App />
function App() {
  const [data, setData] = React.useState(cards);

  const handleOnDelete = (id) => {
    const newData = data.filter((item) => item.id != id);
    setData(newData);
  };

  const handleOnHide = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) item.showBack = !item.showBack;
      return item;
    });
    setData(newData);
  };

  return (
    <div>
      <Header totalCards={data.length} />
      <div className='container'>
        {data.map((card) => (
          <Card
            key={card.id}
            {...card}
            onDelete={handleOnDelete}
            onHide={handleOnHide}
          />
        ))}
      </div>
    </div>
  );
}

// Render the container component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
