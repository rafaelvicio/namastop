const assert = require("assert");

const util = require("../src/utils/utils");

it("Extrair userID from message", () => {
  const text = "namastop 2222222222222 <@UG9769B8R>";
  const result = util.getUserFromMessage(text);
  assert.equal(result, "UG9769B8R");
});
