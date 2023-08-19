import * as utils from "./util"
var text1 = new Text("&5✧ &dPristine: &a0", 3, 5 + 15 / 4)
var rec1 = new Rectangle(Renderer.color(40,40,40),0,5,69,15)
var rec2 = new Rectangle(Renderer.color(40,40,40),0,rec1.getHeight() + 10 ,69,15)
var text2 = new Text("&6Ⓒ &eCoins: &a0", 3, rec1.getHeight() + 10 + 15 / 4)
rec1.setOutline(Renderer.color(120,120,120),1)
rec2.setOutline(Renderer.color(120,120,120),1)
export function update(arg1, arg2, mode){
    if(mode == "gemstone"){
        text1.setString("&5✧&d Profit/h: &a" + arg1)
        text2.setString("&6Ⓒ &eCoins: &a" + utils.m(arg2,2))
    }
    if(mode == "powder"){
        text1.setString("&2Ⓜ Mithril: &a" + utils.seperator(arg1))
        text2.setString("&dⒼ Gemstone: &a" + utils.seperator(arg2))
    }
}
export function draw(){
    rec1.draw()
    rec2.draw()
    text1.draw()
    text2.draw()
    updaterec()
}
export function profit(coins,time){
    var x = time[0] / 3600 + time[1] / 60 + time[2]
    var y = coins/x
    return utils.m(y.toFixed(0),2)
}
function updaterec(){
    rec1.setWidth(text1.getWidth() + 5)
    rec2.setWidth(text2.getWidth() + 5)
}