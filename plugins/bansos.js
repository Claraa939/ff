let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { itsu, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.DATABASE.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = './lib/kbansos.jpg'
    let mbansos = './lib/mbansos.jpg'
    let botol = global.wm
    //let name = itsu.getName[m.sender]
    let __timers = (new Date - global.DATABASE.data.users[m.sender].lastbansos)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.DATABASE.data.users[m.sender]
    if (new Date - global.DATABASE.data.users[m.sender].lastbansos > 300000) {
      if (Aku > Kamu) {
        itsu.sendButtonLoc( m.chat, kbansos, `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,  Dan kamu harus membayar denda 3 Juta rupiah💵`, wm,'MY', '#my', m)
        user.money -= 3000000
        global.DATABASE.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 3000000
        itsu.sendButtonLoc( m.chat, mbansos, `Kamu berhasil  korupsi dana bansos🕴️💰,  Dan kamu mendapatkan 3 Juta rupiah💵`, wm, 'MY', '#my', m)
        global.DATABASE.data.users[m.sender].lastbansos = new Date * 1
      } else {
        itsu.sendButton( m.chat, `Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna kamu *melarikan diri🏃*`, `${botol}`, `Kembali`, `${usedPrefix}menu`, m)
        global.DATABASE.data.users[m.sender].lastbansos = new Date * 1
      }
    } else itsu.sendButton(m.chat, `Kamu sudah Melakukan Korupsi Bansos 💰\nDan kamu harus menunggu selama agar bisa korupsi bansos kembali \n▸ 🕓 *${timers}*`, `${botol}`, `⋮☰ Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['bansos']
handler.tags = ['rpg']
handler.command = /^(bansos|korupsi)$/i
handler.premium = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}