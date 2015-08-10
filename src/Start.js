var Start = cc.Layer.extend({
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

        var that = this;
        Start.instance = null;

        var size = cc.winSize;

        var mask = new cc.LayerColor(cc.color(255,255,255,58),size.width,size.height);
        this.mask = mask;
        this.addChild(mask);

        var obj = ccs.load(res.start_json);

        var node = obj.node;
        var action = obj.action;
        node.runAction(action);

        this.node = node;
        this.action = action;

        node.anchorX = node.anchorY = 0.5;
        node.x = size.width / 2;
        node.y = size.height / 2;

        this.addChild(node);

        //bind event

        var playBtn = ccui.helper.seekWidgetByName(node,"playBtn");
        playBtn.addClickEventListener(function(){
            Ready.show(that.parent);
            that.removeFromParent();
        });
    },
    onEnter: function () {
        this._super();

        this.action.gotoFrameAndPlay(0, 60, 0, true);

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

Start.instance = null;

Start.show = function (root) {
    GameManager.setState(GameState.un_start);

    var start = Start.instance;
    if (!start) {
        start = new Start();
    }

    root.addChild(start,1000);
}