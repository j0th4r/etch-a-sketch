const container = document.getElementById('container');
const btn = document.getElementById('btn');
let gridSize;
let fade = 11;

btn.addEventListener('click', () => {
  fade = 11;

  const divs = document.querySelectorAll('.grid');
  divs.forEach((div) => {
    container.removeChild(div);
  });

  do {
    gridSize = prompt('Enter the grid size');
  } while (gridSize < 1 || gridSize > 100);
  

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${100 / gridSize}%`;
    div.style.height = `${100 / gridSize}%`;
   
    container.appendChild(div);

    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      if(fade != 0) {
        fade--;
      }
    div.style.opacity = (fade/10);
    });
  }
})

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid');
  container.appendChild(div);

  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    if(fade != 0) {
        fade--;
      }
    div.style.opacity = (fade/10);
  });
}

