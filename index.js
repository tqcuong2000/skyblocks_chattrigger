import * as render from "./render"
import * as utils from "./util"
var pristine = [0, 0], coins, mode
var powder = [0, 0], time = [0, 0, 0, 0];
register("chat", (event) => {
    var message = ChatLib.getChatMessage(event).toString().replace(/^\s+|\s+$/gm, '')
    gemstone_mine(message)
    powder_mine(message)
})

register("renderOverlay", () => {
    if (pristine[0] != 0 || pristine[1] !=0) {
        render.draw()
    }
})
register("command", () => {
    pristine[0] = 0
    powder = [0, 0]
    time = [0, 0, 0, 0]
}).setName("aaa")
register("worldLoad", () => {
    pristine = [0, 0]
    powder = [0, 0]
    time = [0, 0, 0, 0]
})
//functions
function gemstone_mine(msg) {
    if (!msg.startsWith("PRISTINE!"))
        return
    mode = "gemstone"
    time[3] = 10
    if(!msg.includes("Jasper")){
        msg = msg.replace(/\D/g, '');
        pristine[0] += parseInt(msg)
        coins = pristine[0] * 240
    }
    else{
        msg = msg.replace(/\D/g, '');
        pristine[1] += parseInt(msg)
        coins = pristine[1] * 1188
    }
    render.update(render.profit(coins, time), coins, mode)
}
function powder_mine(msg) {
    if (!msg.startsWith("You received"))
        return
    if (!msg.endsWith("Powder."))
        return
    mode = "powder"
    var pdw = parseInt(msg.replace(/\D/g, ''));
    msg.includes("Mithril Powder") ? powder[0] += pdw : false
    msg.includes("Gemstone Powder") ? powder[1] += pdw : false
    render.update(powder[0], powder[1], mode)
}
register("step", () => {
    time[3] > 0 ? time[3]-- : false
    if (time[3] == 0)
        return
    time[0] >= 59 ? time[0] = 0 & time[1]++ : time[0]++
    time[1] >= 60 ? time[1] = 0 & time[2]++ : false
}).setDelay(1)