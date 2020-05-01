;(function () {

  "use strict";

  //
  // Variables
  //

  // Get the markdown area
  var markdownArea = document.querySelector("#markdown__area");

  // Get the preview area
  var previewArea = document.querySelector("#preview");

  // Save the localStorage key for easy updates
  var storageKey = "markdownPreview";


  //
  // Functions
  //

  /**
   * Update the preview area
   */
  var updatePreview = function () {
    previewArea.innerHTML = DOMPurify.sanitize(marked(markdownArea.value));
  };

  /**
   * Save the data to localStorage
   * @param {String} data The data to save
   */
  var saveData = function (data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  /**
   * Load the data saved in localStorage
   */
  var loadData = function () {

    // Get the saved data
    var data = localStorage.getItem(storageKey);
    if (!data) return;

    // Load the data into the textarea
    markdownArea.value = JSON.parse(data);

    // Update the preview
    updatePreview();

  }

  /**
   * Handle input events
   */
  var inputHandler = function () {

    // Update the preview
    updatePreview();

    // Save the Markdown to localStorage
    saveData(markdownArea.value);

  };

  //
  // Inits & Event Listeners
  //

  // Initialize Tabby
  var tabs = new Tabby("[data-tabs]");

  // Load any saved data
  loadData();

  // Update the preview area on input
  markdownArea.addEventListener("input", inputHandler);

})();