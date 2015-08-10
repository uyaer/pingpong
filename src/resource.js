var res = {
    eff_plist: "res/eff.plist",

    pic_list: "res/res.plist",
    pic_png: "res/res.png",

    numFont_fnt:"res/numFont.fnt",
    numFont_png:"res/numFont.png",

    pause_json: "res/pause.json",
    start_json: "res/start.json",
    over_json: "res/over.json",
    ready_json: "res/ready.json",
    touch_json: "res/touch.json"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
