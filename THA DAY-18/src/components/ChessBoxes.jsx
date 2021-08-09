import ChessBox from "./ChessBox";

function Boxes({ item }) {
  return (
    <div className="row">
      <ChessBox row={1} col={item} />
      <ChessBox row={2} col={item} />
      <ChessBox row={3} col={item} />
      <ChessBox row={4} col={item} />
      <ChessBox row={5} col={item} />
      <ChessBox row={6} col={item} />
      <ChessBox row={7} col={item} />
      <ChessBox row={8} col={item} />
    </div>
  );
}

export default function BoxRow() {
  const counts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="board">
      {counts.map((item, index) => {
        return <Boxes key={index} item={item} />;
      })}
    </div>
  );
}
