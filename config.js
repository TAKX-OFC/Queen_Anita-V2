//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/TAKX-OFC/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "263714773898,263785192250";
global.owner = process.env.OWNER_NUMBER || "263785192250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/1be89695dac650ecf9b96.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFMU09vb012TWM3ZU5yVnBRYlNLMEtISW5vZThZYWJtazdpOUNhUzBXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnNyMmRFN2tIek00bWlmRThIN0pXeUxENmFlWnAweXE5M3h0UTc1ZTcwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSCs5SCtOSmpDR25LVU9tTm8yUkNPeGpZSVhLSGVLQnhhVy91Q0VaWlYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxc3duT1V4a2JjSjZrNmNDQTZaamhLMU1YTGJJbHlWeUpRNjhBcWVzVDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndESmhlVCtVaS9ueXpYMGZoQ0NPRTF3NlMzWXA3Yk5PMndCYUVhR2w1VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53b2JhQzhRYlhGTUNPMHZpdFhaaHJzdHpGVjlFZVFhRzRGclBkbjduQ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FFKzAxZSszNmhYT09uZHZjQytkVzBDR0pmN200QnZuNEM1RnphVUMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RsS3UwR0dBaDJFeFU1MVRpTE85ZDN1RmZ3WlFrNE5WaExoRUkraDNWWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl3eGRVUElBVU1XRnR6T29lbUV4aDVycE50aUFjbnlkQ0ViQjZDeWVsL0h3YXMvbU9kS1F1dUM3cFJoVDg4WTB4ckRPTHB4MVFtZVN0MGhXNWY5TWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IllRaHZOS0JyKzBJNGdValU4YUtaTUlkVkU5emlFNisvSDNNVXBaMVZhTEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik41V0ZFa3FBUVFPSUg5SnRuZ0FNQlEiLCJwaG9uZUlkIjoiYThhYWM0N2ItZDU2Yy00NjQ1LTljN2UtYzJmMmY2MWE0MjQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpKbml0dm52N2IrSnYvMVBuS21zZ2tRSXVoVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyaXo0eEluZkRlZE5EWFB1QnhpOG9qdVdmeGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEtFMzFNRzQiLCJtZSI6eyJpZCI6IjI2MzcxNDc3Mzg5ODoxNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3poaFpJSEVMbUg0YlFHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWhocytTNnlEelZpKzA4MkJTdWZ0ZTBhNGU5c1IwYTFhZzZ4cUQ4dU54UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTHNBT3VLQ09mWHFhWDV1MkJoRGNZM0tDNjdKTlp2cG43WTMxNDk0VStCcW9ZT0xsTVpQRWFSWHprc3daMWxMRnc3QzdJbDFrTkdadlA3elhyei9mQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlNxWHRWZ3hSV0I1NXU2MjBadGdYYUdBMFVqelhXZi9UeElIbVNIMDU1U29wT0EzUzhZSVpqLzYyVWlObXJyK1U3cFhsSmZSTzk0b2lKalY5WnYzcmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0NzczODk4OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZWWJQa3VzZzgxWXZ0UE5nVXJuN1h0R3VIdmJFZEd0V29Pc2FnL0xqY1UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEyNTQ4NTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmJtIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TAKX-OFC`",
  author: process.env.PACK_AUTHER || "MUNYORO-BOT",
  packname: process.env.PACK_NAME || "MUNYORO-BOT",
  botname: process.env.BOT_NAME || "MUNYORO-BOT",
  ownername: process.env.OWNER_NAME || "TAKX-OFC",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "https://chat",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
