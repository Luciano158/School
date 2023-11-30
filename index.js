const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7'];
const gradeValues = [900, 1195, 1395, 1600, 1045, 900, 715];
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
    `;
    const gradeClicks = document.createElement('div');
    gradeClicks.className = 'grade-clicks';
    gradeClicks.innerText = '0';
    gradeDiv.appendChild(gradeClicks);

    gradeDiv.addEventListener('click', function () {
      updateTotal(index);
      updateClicks(gradeClicks);
    });

    gradesContainer.appendChild(gradeDiv);
  });
});

function updateTotal(index) {
  total += gradeValues[index];
  document.getElementById('total').innerText = total;
}

function clearAll() {
  total = 0;
  document.getElementById('total').innerText = total;

  // Clear grade clicks
  const gradeClicksElements = document.querySelectorAll('.grade-clicks');
  gradeClicksElements.forEach((clicks) => {
    clicks.innerText = '0';
  });
}

function updateClicks(gradeClicks) {
  let clicks = parseInt(gradeClicks.innerText, 10);
  clicks++;
  gradeClicks.innerText = clicks;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
