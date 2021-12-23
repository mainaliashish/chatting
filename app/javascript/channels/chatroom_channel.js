import consumer from "./consumer"
// import scroll_bottom from "../../javascript/packs/application";

var scroll_bottom = function () {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // alert(data.foo)
    $("#message-container").append(data.mod_message);
    // scroll_bottom();
    scroll_bottom();
    // window.scrollTo(0, document.body.scrollHeight);
    // $("html,body").animate({ scrollTop: 9999 });
  }
});
