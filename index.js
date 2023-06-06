document.addEventListener('DOMContentLoaded', function() {
    var caseItems = document.querySelectorAll('.success-case-item');
    
    caseItems.forEach(function(item) {
      var caption = item.querySelector('.success-case-caption');
      var content = item.querySelector('.case-content');
      
      item.addEventListener('click', function() {
        item.classList.toggle('active');
      });
      
      caption.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });
  });
  