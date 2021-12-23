// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
// require("jquery");
require("turbolinks").start()
// require('semantic-ui')
require("@rails/activestorage").start()
require("channels")
import "@doabit/semantic-ui-sass";

var scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

var submit_message = function() {
  $('#message_body').on('keypress', function(e) {
      if (e.key == "Enter") {
          $('button').trigger('click');
          e.target.value = "";
      }
  });
}



$(document).on("turbolinks:load", function() {
    $(".ui.dropdown").dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    scroll_bottom();
    submit_message();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
