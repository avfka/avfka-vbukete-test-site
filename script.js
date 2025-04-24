document.addEventListener('DOMContentLoaded', function() {
    // Получаем все области карты
    const areas = document.querySelectorAll('area');
    
    // Получаем все группы с адресами
    const addressGroups = document.querySelectorAll('.address__group');
    
    // Функция для активирования анимации на нужной области
    function activateAddress(rowId) {
      // Удаляем класс 'active' у всех адресов
      addressGroups.forEach(group => group.classList.remove('active'));
      
      // Добавляем класс 'active' к нужной группе
      const targetRow = document.querySelector(`[data-area="${rowId}"]`);
      if (targetRow) {
        const targetGroup = targetRow.querySelector('.address__group');
        if (targetGroup) {
          targetGroup.classList.add('active');
        }
      }
    }
    
    // Назначаем обработчики событий для всех областей карты
    areas.forEach(area => {
      area.addEventListener('mouseenter', (event) => {
        const targetId = event.target.dataset.target;
        activateAddress(targetId);
      });
    
      area.addEventListener('mouseleave', () => {
        addressGroups.forEach(group => group.classList.remove('active'));
      });
    });
    
    // Добавляем обработчики для самих адресных строк
    addressGroups.forEach(group => {
      const row = group.closest('.address__row');
      if (row) {
        group.addEventListener('mouseenter', () => {
          addressGroups.forEach(g => g.classList.remove('active'));
          group.classList.add('active');
        });
        
        group.addEventListener('mouseleave', () => {
          group.classList.remove('active');
        });
      }
    });
});