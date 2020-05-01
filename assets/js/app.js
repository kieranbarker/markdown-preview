;(function () {

  "use strict";

  //
  // Variables
  //

  // Get the markdown area
  var markdownArea = document.querySelector("#markdown__area");

  // Get the preview area
  var previewArea = document.querySelector("#preview");

  // Save the localStorage key for easy future changes
  var storageKey = "markdownPreview";


  //
  // Functions
  //

  /**
   * Save the data to localStorage
   * @param {String} data The data to save
   */
  var saveData = function (data) {
    localStorage.setItem(storageKey, data);
  };

  /**
   * Update the markdown preview
   */
  var updatePreview = function () {

    // Update the preview
    previewArea.innerHTML = DOMPurify.sanitize(marked(markdownArea.value));

    // Save the Markdown to localStorage
    saveData(markdownArea.value);

  };


  //
  // Inits & Event Listeners
  //

  // Initialize Tabby
  var tabs = new Tabby("[data-tabs]");

  // Update the preview area on input
  markdownArea.addEventListener("input", updatePreview);

})();