/**
 * Array of grade names.
 */
const grades = ['Grade 0', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7','LSEN'];

/**
 * Array of grade values corresponding to the grade names.
 */
const gradeValues = [700,880,540,635,775,515,620,575,640];

/**
 * Variable to store the total value.
 */
let total = 0;

/**
 * Array of schools with their pricing.
 */
const schools = [
  { name: 'School A', pricing: 'Grade 0: $700, Grade 1: $880, Grade 2: $540' },
  { name: 'School B', pricing: 'Grade 3: $635, Grade 4: $775, Grade 5: $515' },
  { name: 'School C', pricing: 'Grade 6: $620, Grade 7: $575, LSEN: $640' }
];

/**
 * Event listener for DOMContentLoaded event.
 * Initializes the grade elements and sets up event listeners.
 */
document.addEventListener('DOMContentLoaded', function () {
  const gradesContainer = document.getElementById('grades-container');
  const totalElement = document.getElementById('total');
  const schoolDropdown = document.getElementById('school-dropdown');
  const schoolPricing = document.getElementById('school-pricing');

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

  // Populate the dropdown menu with school options
  schools.forEach((school, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = school.name;
    schoolDropdown.appendChild(option);
  });

  // Add event listener for the dropdown menu
  schoolDropdown.addEventListener('change', function () {
    updateSchoolPricing(schoolDropdown.value);
  });
});

/**
 * Updates the total value by adding the value of the clicked grade.
 * @param {number} index - The index of the clicked grade.
 */
function updateTotal(index) {
  total += gradeValues[index];
  document.getElementById('total').innerText = total;
}

/**
 * Clears the total value and resets the grade clicks.
 */
function clearAll() {
  total = 0;
  document.getElementById('total').innerText = total;

  // Clear grade clicks
  const gradeClicksElements = document.querySelectorAll('.grade-clicks');
  gradeClicksElements.forEach((clicks) => {
    clicks.innerText = '0';
  });
}

/**
 * Updates the click count for a grade.
 * @param {HTMLElement} gradeClicks - The element displaying the click count for the grade.
 */
function updateClicks(gradeClicks) {
  let clicks = parseInt(gradeClicks.innerText, 10);
  clicks++;
  gradeClicks.innerText = clicks;
}

/**
 * Generates a random color in hexadecimal format.
 * @returns {string} - The generated random color.
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Updates the displayed pricing based on the selected school.
 * @param {number} schoolIndex - The index of the selected school.
 */
function updateSchoolPricing(schoolIndex) {
  const schoolPricing = document.getElementById('school-pricing');
  schoolPricing.textContent = schools[schoolIndex].pricing;
}
