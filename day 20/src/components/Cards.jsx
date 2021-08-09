function Card({ title, calories, index, setCards, cards }) {
  return (
    <div className="card">
      <h2>
        {title || "My Card"}{" "}
        <button
          onClick={() => {
            const newCards = cards.filter((el, i) => i != index);
            setCards(newCards);
          }}
          className="btn"
        >
          Delete
        </button>
      </h2>
      <p>You have consumed {calories || 56} calories today.</p>
    </div>
  );
}
function Cards({ menu, setCards }) {
  return (
    <div>
      <h2>
        Calorie Read Only <span class="cardCount">{menu.length}</span>
      </h2>
      <div className="CardContainer">
        {menu.length != 0 ? (
          menu.map((item, index) => {
            return (
              <>
                <Card
                  title={item[0]}
                  calories={item[1]}
                  key={index}
                  index={index}
                  setCards={setCards}
                  cards={menu}
                />
                <hr />
              </>
            );
          })
        ) : (
          <div class="noItem">No Element</div>
        )}
      </div>
    </div>
  );
}

export default Cards;