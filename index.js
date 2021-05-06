const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(event) {
      return "clicked"
    });
  }

//Added an event listern so it listens for the 'click' event -> execute the callback function
