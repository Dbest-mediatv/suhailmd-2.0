const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23408165289510";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_26_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhVZHlSZGdkbldkSVRRVDVSdXhza2FOSDY5RlZoaDdkYytHT2xweHA5UW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTI4OTUxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDEwRjRFMUVFMTkwNjRBM0FFRjhENDg0ODg2QUY4NzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDA3MjEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTI4OTUxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0RFNTA4RjIyNEJCNjdFMERCOTEwRUExRDk5MkFBMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDA3MjEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRrcjFkNVc5Um5POS1MSEpoZW1FcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDAxODRmNjMtN2U1Yy00YThiLTg3ZTEtYTZhZTE3NjVhNjNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICA0NCxcbiAgICAgIDIzNixcbiAgICAgIDk3LFxuICAgICAgMTcyLFxuICAgICAgMTk5LFxuICAgICAgMTQyLFxuICAgICAgMTY5LFxuICAgICAgMTE3LFxuICAgICAgMjE0LFxuICAgICAgMjQ4LFxuICAgICAgMTY3LFxuICAgICAgMTc1LFxuICAgICAgMTYyLFxuICAgICAgMjM0LFxuICAgICAgMjUwLFxuICAgICAgNzUsXG4gICAgICAxNzIsXG4gICAgICAxNjEsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxNDAsXG4gICAgICAxMCxcbiAgICAgIDE0NixcbiAgICAgIDI1MSxcbiAgICAgIDcwLFxuICAgICAgMTk1LFxuICAgICAgMTQ4LFxuICAgICAgMTAsXG4gICAgICA1MCxcbiAgICAgIDE4MCxcbiAgICAgIDEzMyxcbiAgICAgIDcwLFxuICAgICAgMTkyLFxuICAgICAgMTQwLFxuICAgICAgMTU5LFxuICAgICAgMjA1LFxuICAgICAgODMsXG4gICAgICAyMDIsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWExSNzdENEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjUyODk1MTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2NDM4MzQ5MzA3OTgyOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2EgSGVyYmVydFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmanJwSUdFT2JhekxrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK3hnU2pPaWVCLy9NbEtXMFFxVmV3RmY5S1FpNjlIaFFJSGZ2Vis2NnhWcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJubnJDQVZnTXl3bHdTRUJGUWd5cVA5eHZBYUhnYnVTamZBRVZEbC95aS8vTFlFR2hPK2FVQUpvYVhwYmVmUFJLSUd5ZUUxd1dNMGQwRnpsSjdxV0tCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1ZU9hVHpyaDlZMGt2U2J4TmI3dmZFeG80M0tDM0ZVOW9FSTRWTW1SYTE3c1UyQVlhcnhNY3Z5Y2FoRy9PcVZMQnMrRVJNN21jTWNxQWZDdWxrYjlCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY1Mjg5NTEwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDA3MjEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHkxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpc0owQllodG8wdzVxK09tVjVIczcxd01UV290ZlNVeWNwQ082TjRtT3RFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDkxMjc4MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQwNTgwODQ1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
