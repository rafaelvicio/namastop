const Botkit = require("botkit");
const axios = require("axios");
const cron = require("node-cron");

const controller = Botkit.slackbot({
  debug: true
});

const getUserFromMessage = message => {
  const start = message.indexOf("@");
  const end = message.indexOf(">");
  const to = message.substring(start + 1, end);
  return to;
};

const bot = controller
  .spawn({
    token: "xoxb-553244316689-554156334197-dIbgsCrAzN2RX2Rgbd9OT98Q"
  })
  .startRTM();

cron.schedule("* * * * Friday", function() {
  bot.api.users.list({}, function(err, { members }) {
    var listaDeIds = members.filter(member => member.is_bot == false);
    listaDeIds.map(member =>
      bot.say({
        text: "Please remember to send feedback this week at @namastop",
        channel: member.id
      })
    );
  });
});

controller.hears("namastop", "direct_message", async function(bot, message) {
  try {
    const to = getUserFromMessage(message.text);

    const { text, user } = message;

    const feedback = {
      to,
      message: text,
      from: user
    };

    await axios.post("http://localhost:3333/api/feedbacks", feedback);

    bot.reply(message, "Your feedback has been sent successfully ;)");
  } catch (error) {
    bot.reply(message, "Your feedback could not be sent, please try again :/");
  }
});
