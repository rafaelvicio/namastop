const getUserFromMessage = message => {
  const start = message.indexOf("@");
  const end = message.indexOf(">");
  const to = message.substring(start + 1, end);
  return to;
};

export default getUserFromMessage;
