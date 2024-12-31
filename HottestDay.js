(function() {
  const rows = document.querySelectorAll('table tr');
  let maxTemp = -Infinity;
  let hottestDay = '';

  rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
          const date = cells[2]?.textContent.trim();
          const tempMax = parseFloat(cells[3]?.textContent.trim());

          if (!isNaN(tempMax) && tempMax > maxTemp) {
              maxTemp = tempMax;
              hottestDay = date;
          }
      }
  });

  if (hottestDay) {
      alert('Найспекотніший день: ' + hottestDay + ', Температура: ' + maxTemp + '°C');
  } else {
      alert('Не вдалося знайти інформацію про температуру.');
  }
})();
