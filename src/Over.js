var Over = cc.Layer.extend({
    /**
     * @type cc.Node
     */
    node: null,
    /**
     * @type cc.Action
     */
    action: null,
    /**
     * @type cc.LayerColor
     */
    mask: null,
    ctor: function () {
        this._super();

        var that = this;
        Pause.instance = null;

        var size = cc.winSize;

        var mask = new cc.LayerColor(cc.color(255, 255, 255, 50), size.width, size.height);
        this.mask = mask;
        this.addChild(mask);

        var obj = ccs.load(res.over_json);

        var node = obj.node;
        var action = obj.action;
        node.runAction(action);

        this.node = node;
        this.action = action;

        node.anchorX = node.anchorY = 0.5;
        node.x = size.width / 2;
        node.y = size.height / 2;

        this.addChild(node);

        //txt
        var defenTF = ccui.helper.seekWidgetByName(node, "defenTF");
        defenTF.ignoreContentAdaptWithSize(true);
        var scoreTF = ccui.helper.seekWidgetByName(node, "scoreTF");
        scoreTF.ignoreContentAdaptWithSize(true);
        scoreTF.setString(GameManager.score);

        //bind event

        var backBtn = ccui.helper.seekWidgetByName(node, "backBtn");
        backBtn.addClickEventListener(function () {
            cc.director.runScene(new Game());
        });
    },
    onEnter: function () {
        this._super();

        this.node.scale = 0;
        this.node.runAction(cc.scaleTo(0.5, 1));

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function () {
                return true
            }
        }, this.mask);

        //if(cc.sys.isMobile){
        //    var adPlugin = anysdk.AgentManager.getInstance().getAdsPlugin();
        //    adPlugin.showAds(AdsType.AD_TYPE_FULLSCREEN);
        //}
    },
    onExit: function () {
        this._super();

        cc.eventManager.removeListeners(this.mask);
    }
});

Over.instance = null;

Over.show = function (root) {
    GameManager.setState(GameState.over);

    cc.eventManager.dispatchCustomEvent(Const.EVENT_SHOW_PAUSE,null);

    var over = Over.instance;
    if (!over) {
        over = new Over();
    }

    root.addChild(over, 1000);
}