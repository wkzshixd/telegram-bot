const TelegramApi = require("node-telegram-bot-api");
const token = "6452228994:AAFz_swZIMf68b7n_9EOR_tHq1eXPRQb-3E";

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([{ command: "/start", description: "поехали" }]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    if (msg.chat.username == "tr4umatiz3d" || "painfu1") {
      await bot.sendMessage(chatId, "О ТИМОФЕЙ)))");
      for (let i = 0; i < 5; i++) {
        await bot.sendMessage(chatId, "пора воркать тимофей");
        await bot.sendSticker(
          chatId,
          "CAACAgIAAxkBAAPSZPHWX2LkDtrMAa6LG1WPUJTwcowAAmArAAKTpLhJYsXHZcJj4JgwBA"
        );
        await bot.sendMessage(chatId, "когда воркать заебал");
        await bot.sendSticker(
          chatId,
          "CAACAgIAAxkBAAIBB2Tx1spTW2Gz1W3xhvXTFrkTMpY6AALRLgACOQsJSuVPFIAE_rhCMAQ"
        );
      }
      await bot.sendMessage(
        chatId,
        "какую же проклятую хуйню я могу сделать, мне страшно . . ."
      );
    }
  }
  console.log(msg);
});
