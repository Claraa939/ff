let handler = async (m, { itsu, command, args, text, usedPrefix, DevMode }) => {
  let { spawn } = require('child_process')
  let fs = require('fs')
const vn =[
'./src/Nya.mp3',
'./src/Nyaa.mp3',
]
hasil = vn[Math.floor(Math.random() * (vn.length))]
hisil = fs.readFileSync(hasil)
const anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": global.thumb
					},
					"title": "ðð¼ðð¿ð®ð",
					"description": "Gourav",
					"currencyCode": "USD",
					"priceAmount1000": "999999999999",
					"retailerId": ">//<",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
}
  itsu.relayWAMessage(itsu.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "ï¼­ï½ï½ï½ ï¼¢ï½ï½",
                        "description": " \n_Â©Gourav 2022_ ",
                        "buttonText": `Menu`,
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            { title: 'ãï¼¬ï½ï½ï½ï¼­ï½ï½ï½ã',
                                "rows": [
                                    {
                                        "title": `ãð¥ã- Êá´á´ É¢Êá´á´á´ `, "description":  ``,
                                        "rowId": `${usedPrefix}from`
                                    }, {
                                       "title": `ãâã-  Êá´É´á´Éªá´á´` , "description": ``,
                                       "rowId": `${usedPrefix}runtime`
                                    }, {
                                       "title": `ãð¤ã- á´á´¡É´á´Ê`,
"description": ``, 
                                       "rowId": `${usedPrefix}owner`
                                    }, {
                                       "title": `ãâï¸ã- SC `,
"description": ``, 
                                        "rowId": `${usedPrefix}sc`
                                    }, {
                                        "title": `ãðã- á´Êá´á´á´ `,
"description": ``, 
                                        "rowId": `${usedPrefix}about`                               
                                    }, { 
                                        "title": `ãð±ã- sá´á´á´s`,
"description": ``, 
                                        "rowId": `${usedPrefix}stats`
                                    },{
"title": `ãâ®â°ã- á´á´É´á´`,
"description": ``, 
                                       "rowId": `${usedPrefix}404`}
                                ]
                            }
                        ]
                    }
                 }, {quoted: anu}),{waitForAck: true}
)
return itsu.sendMessage(m.chat, hisil, 'audioMessage', {mimetype: 'audio/mp4', quoted: m, ptt: true, duration: 4040404})
}

handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler


