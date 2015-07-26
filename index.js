(function () {

  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize () {

    var SHEET_ID = 'messages-bigger-send-button';
    var SHEET_SELECTOR = 'style#' + SHEET_ID;
    var SHEET_CONTENT = [
      '#messages-attach-button { width: 50px; height: 50px; -moz-padding-start: 0; -moz-padding-end: 0; }',
      '#messages-input { font-size: 1.4rem; line-height: 1.8rem }',
      '#messages-send-button { width: 50px; height: 50px; padding: 0 }'
    ].join('\n');

    var existing = document.head.querySelector(SHEET_SELECTOR);
    if (existing) { existing.parentNode.removeChild(existing); }

    var sheet = document.createElement('style');
    sheet.setAttribute('id', SHEET_ID);
    sheet.setAttribute('type', 'text/css');

    var styleText = document.createTextNode(SHEET_CONTENT);
    sheet.appendChild(styleText);

    document.head.appendChild(sheet);

  }

}());
