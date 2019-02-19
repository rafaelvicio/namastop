const getUserFromMessage = message => {
  const start = message.indexOf("@");
  const end = message.indexOf(">");
  return message.substring(start + 1, end);
};

module.exports = {
  getUserFromMessage
};
