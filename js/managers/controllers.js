function setupController(view) {
  showAppLoader();
  getElementById("appContainer").style.opacity = 0;
  scrollToElementById(view);
  loadAppContainer(function() {
    hideAppLoader();
  });

}

function loadAppContainer(callback) {
  $('#appContainer')
      .animate({opacity: .0}, 'slow', function() {
        $(this)
            .css({'background': '#282f30'})
            .animate({opacity: 1});
        callback();
      });

}

function showAppLoader() {
  showElementById("appLoader");
}

function hideAppLoader() {
  hideElementById("appLoader");
}