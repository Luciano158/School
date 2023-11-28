const grades = ['Grade R', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'LSEN'];
const gradeValues = [700, 880, 540, 635, 775, 515, 620, 575, 640];
let total = 0;

document.addEventListener('DOMContentLoaded', function () {
  const gradesContainer = document.getElementById('grades-container');
  const totalElement = document.getElementById('total');

  grades.forEach((grade, index) => {
    const gradeDiv = document.createElement('div');
    gradeDiv.className = 'grade';
    gradeDiv.style.backgroundColor = getRandomColor();
    gradeDiv.innerHTML = `
      <p style="color: white">${grade} - ${gradeValues[index]}</p>
      <button onclick="updateTotal(${index}, 1)">+</button>
      <button onclick="updateTotal(${index}, -1)">-</button>
    `;
    gradesContainer.appendChild(gradeDiv);
  });
});

function updateTotal(index, value) {
  total += value * gradeValues[index];
  document.getElementById('total').innerText = total;
}

function clearTotal() {
  total = 0;
  document.getElementById('total').innerText = total;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
