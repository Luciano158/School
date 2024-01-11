const grades = ['Grade 0000', 'Grade 000', 'Grade 00', 'Grade 0', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7','Heaphones','Calculator'];
const gradeValues = [932, 1131, 957, 1233, 1571, 1310, 1326, 883, 791.90, 898.20,1000,100,408];
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
