// building the grid

function makeRows(rows, cols) {
  const container = document.getElementById("container");
  // set variable value on container
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let cell;
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

// adding the hover effect

const items = document.querySelectorAll('.grid-item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});

// resetting the grid

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    });
})





