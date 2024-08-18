const calendarContainer = document.querySelector('.calendar-container');
const monthYearElement = document.querySelector('#month-year');
const prevMonthButton = document.querySelector('#prev-month');
const nextMonthButton = document.querySelector('#next-month');
const calendarGrid = document.querySelector('.calendar-grid');


let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
const daysInMonth = lastDayOfMonth.getDate();
const firstDayOfWeek = firstDayOfMonth.getDay();

monthYearElement.textContent = getMonthName(currentMonth) + " " + currentYear;

let dayElements = '';

for (let i = 0; i < firstDayOfWeek; i++) {
dayElements += '<div class="day empty"></div>';
}

// Add cells for each day in the month
for (let i = 1; i <= daysInMonth; i++) {
const dayOfWeek = (firstDayOfWeek + i - 1) % 7; // Calculate the day of the week
const dayElement = document.createElement('div');
dayElement.className = 'day';
dayElement.textContent = i;
if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
    dayElement.classList.add('today');
}
if (dayOfWeek === 0) {
    dayElement.classList.add('sunday');
}
dayElements += dayElement.outerHTML;
}

const totalDaysInGrid = 42;
const numberOfEmptyCells = totalDaysInGrid - (daysInMonth + firstDayOfWeek);
for (let i = 0; i < numberOfEmptyCells; i++) {
dayElements += '<div class="day empty"></div>';
}

calendarGrid.innerHTML = dayElements;
}



function getMonthName(month) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[month];
}

prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();
