const gridConfig = {
  columns: 10,
  rows: 10,
};

function generateGridLayout() {
  let gridLayout: Array<Array<number>> = [];
  for (let i = 0; i < gridConfig.rows; i++) {
    gridLayout[i] = [];
    for (let j = 0; j < gridConfig.columns; j++) {
      gridLayout[i].push(j);
    }
  }

  return gridLayout;
}

function App() {
  const grid = generateGridLayout();
  return (
    <main className="grid grid-cols-1 grid-rows-10">
      {grid.map((row) => (
        <div className="flex">
          {row.map((cell) => (
            <div>{cell}</div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default App;
