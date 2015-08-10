var Pause = cc.Layer.extend({
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
    mask:null,
    ctor: function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.pic_list);

        var that = this;
        Pause.instance = null;

        var size = cc.winSize;

        var mask = new cc.LayerColor(cc.color(255,255,255,58),size.width,size.height);
        this.mask = mask;
        this.addChild(mask);

        var obj = ccs.load(res.pause_json);

        var node = obj.node;
        var action = obj.action;
        node.runAction(action);

        this.node = node;
        this.action = action;

        node.anchorX = node.anchorY = 0.5;
        node.x = size.width / 2;
        node.y = size.height / 2;

        this.addChild(node);

        //action
        action.setFrameEventCallFunc(function(frame){
            if(frame.getFrameIndex() == 70){
                Ready.show(that.parent);
                that.removeFromParent();
            }
        });

        //bind event

        var replayBtn = ccui.helper.seekWidgetByName(node,"replayBtn");
        var playBtn = ccui.helper.seekWidgetByName(node,"playBtn");
        replayBtn.addClickEventListener(function(){
            cc.director.runScene(new Game());
        });
        playBtn.addClickEventListener(function(){
            that.action.gotoFrameAndPlay(40, 70, 40, false);
        });
    },
    onEnter: function () {
        this._super();

        this.action.gotoFrameAndPlay(0, 30, 0, false);

        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(){return true}
        },this.mask);
    },
    onExit:function(){
        this._super();

        cc.eventManager.removeListeners(this.mask);
    }
});

Pause.instance = null;

Pause.show = function (root) {
    GameManager.setState(GameState.pause);

    cc.eventManager.dispatchCustomEvent(Const.EVENT_SHOW_PAUSE,null);
    cc.eventManager.dispatchCustomEvent(Const.EVENT_PAUSE,null);

    var pause = Pause.instance;
    if (!pause) {
        pause = new Pause();
    }

    root.addChild(pause,1000);

    //if(cc.sys.isMobile){
    //    var adPlugin = anysdk.AgentManager.getInstance().getAdsPlugin();
    //    adPlugin.showAds(AdsType.AD_TYPE_FULLSCREEN);
    //}
}