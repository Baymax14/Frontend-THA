function ChessBox({ row, col }) {
  return (
    <div
      className="block"
      style={
        col % 2 === 0
          ? row % 2 === 0
            ? { background: "black" }
            : { background: "white" }
          : row % 2 === 0
          ? { background: "white" }
          : { background: "black" }
      }
    ></div>
  );
}

export default ChessBox;