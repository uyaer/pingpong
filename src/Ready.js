var Ready = cc.Layer.extend({
    /**
     * @type cc.Node
     */
    node: null,
    /**
     * @type cc.Action
     */
    action: null,
    ctor: function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.pic_list);

        var that = this;
        Ready.instance = null;

        var size = cc.winSize;

        var obj = ccs.load(res.ready_json);

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
        action.setFrameEventCallFunc(function (frame) {
            if (frame.getFrameIndex() == 180) {
                that.removeFromParent();
            }
        });

    },
    onEnter: function () {
        this._super();
        var that = this;
        GameManager.setState(GameState.readying);
        this.time = Date.now();
        this.action.gotoFrameAndPlay(0, 180, 0, false);

        cc.eventManager.addCustomListener(Const.EVENT_SHOW_PAUSE, function () {
            if (that.parent) {
                that.node.stopAction(that.action);
                that.removeFromParent();
            }
        });
    },
    onExit: function () {
        this._super();

        if (GameManager.getState() == GameState.readying) {
            GameManager.setState(GameState.running);
            cc.eventManager.dispatchCustomEvent(Const.EVENT_RESUME, null);
        }

        cc.eventManager.removeCustomListeners(Const.EVENT_SHOW_PAUSE);
    }
});

Ready.instance = null;
Ready.show = function (root) {
    var ready = Ready.instance;
    if (!ready) {
        ready = new Ready();
    }

    root.addChild(ready, 1000);
}