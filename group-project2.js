document.addEventListener('DOMContentLoaded', function() {
    const foodBtn = document.getElementById('foodBtn');
    const drinksBtn = document.getElementById('drinksBtn');
    const foodMenu = document.getElementById('foodMenu');
    const drinksMenu = document.getElementById('drinksMenu');
  
    foodBtn.addEventListener('click', function() {
      foodBtn.classList.add('active');
      drinksBtn.classList.remove('active');
      foodMenu.classList.remove('hidden');
      drinksMenu.classList.add('hidden');
    });
  
    drinksBtn.addEventListener('click', function() {
      drinksBtn.classList.add('active');
      foodBtn.classList.remove('active');
      drinksMenu.classList.remove('hidden');
      foodMenu.classList.add('hidden');
    });
  });
  