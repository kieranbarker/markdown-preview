;(function () {

  "use strict";

  //
  // Variables
  //

  // Get the markdown area
  var markdownArea = document.querySelector("#markdown__area");

  // Get the preview area
  var previewArea = document.querySelector("#preview");


  //
  // Functions
  //

  /**
   * Update the markdown preview
   */
  var updatePreview = function () {
    previewArea.innerHTML = marked(markdownArea.value);
  };


  //
  // Inits & Event Listeners
  //

  // Initialize Tabby
  var tabs = new Tabby("[data-tabs]");

  // Update the preview area on input
  markdownArea.addEventListener("input", updatePreview);

})();