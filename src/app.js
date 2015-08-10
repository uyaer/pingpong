var Game = cc.Scene.extend({
    /**
     * 球拍对象
     * @type cc.Sprite
     */
    bat: null,
    ballArr: [],
    hpArr: [],
    /**
     * @type  ccui.TextBMFont
     */
    scoreTF: null,
    onEnter: function () {
        this._super();

       
        var that = this;

        GameManager.reset();
        BallPool.clear();
        this.ballArr = [];

        var size = cc.winSize;
        //cal const
        Const.FLOOR_H = size.height * 0.25;

        cc.spriteFrameCache.addSpriteFrames(res.pic_list);

        this.addBg();

        this.addTouchArea();

        this.addBat();

        Start.show(this);

        this.scheduleUpdate();
        this.schedule(this.createBall, 0.1);

        cc.eventManager.addCustomListener(Const.EVENT_RUNNING, function () {
            that._lastCreateTime = 0;
        });
        cc.eventManager.addCustomListener(Const.EVENT_PAUSE, function () {
            if (that._lastCreateTime) {
                that.pauseDeltaTime = Date.now() - that._lastCreateTime;
            } else {
                that.pauseDeltaTime = 0;
            }
            var len = that.ballArr.length;
            for (var i = 0; i < len; i++) {
                var ball = that.ballArr[i];
                ball.pause();
            }
        });
        cc.eventManager.addCustomListener(Const.EVENT_RESUME, function () {
            if (that._lastCreateTime) {
                that._lastCreateTime = Date.now() - that.pauseDeltaTime;
                that.pauseDeltaTime = 0;
            }
            var len = that.ballArr.length;
            for (var i = 0; i < len; i++) {
                var ball = that.ballArr[i];
                ball.resume();
            }
        });
    },
    onExit: function () {
        this._super();

        this.ballArr.length = 0;
        this.hpArr.length = 0;

        this.unscheduleUpdate();
        this.unschedule(this.createBall);
        cc.eventManager.removeCustomListeners(Const.EVENT_RUNNING);
        cc.eventManager.removeCustomListeners(Const.EVENT_RESUME);
        cc.eventManager.removeCustomListeners(Const.EVENT_PAUSE);
    },

    addBg: function () {
        var size = cc.winSize;
        var bg = new cc.LayerColor(cc.color("#1dbcea", size.width, size.height));
        this.addChild(bg, -1);
    },

    /**
     * 上一次生产的时间
     */
    _lastCreateTime: 0,
    /**
     * 当前等级生产的球总数
     */
    _currLevelMakeCount: 10,
    /**
     * 当前等级已经生产的球
     */
    _currLevelMaked: 0,
    /**
     * 当前等级需要间隔时间来生产下一个球
     */
    _currLevelNeedTime: 0,
    /**
     * 显示pause时已经经过点时间
     */
    pauseDeltaTime: 0,
    createBall: function () {
        if (GameManager.getState() != GameState.running)return;

        if (!this._currLevelNeedTime) {
            this._calNeedTime();
        }

        this._currLevelMakeCount = GameManager.level * 2 + 5;
        var now = Date.now();
        var dt = now - this._lastCreateTime;
        if (dt >= this._currLevelNeedTime) {
            if (this._lastCreateTime) {
                this._lastCreateTime = now - (dt - this._currLevelNeedTime);
            } else {
                this._lastCreateTime = now;
            }
            this._makeBall();
        }
    },

    _calNeedTime: function () {
        var needT = 0.3 + 0.7 * (30 - GameManager.level) / 30;
        needT = limit(needT * 1000, 0.3, 1000);
        this._currLevelNeedTime = needT / 2 + Math.random() * needT;
    },

    _makeBall: function () {
        var ball = BallPool.get(GameManager.level);
        this.ballArr.push(ball);
        this.addChild(ball, 10);

        this._currLevelMaked++;
        this._calNeedTime();
        if (this._currLevelMaked == this._currLevelMakeCount) {//maked over
            GameManager.level++;
            this._currLevelMaked = 0;
            this._showMoreSpeed();
        }
    },

    _showMoreSpeed: function () {
        var size = cc.winSize;
        var sp = new cc.Sprite("#res/txt_more_speed.png");
        sp.x = size.width / 2;
        sp.y = size.height / 2;
        this.addChild(sp, 11);
        sp.runAction(cc.moveBy(1, 0, 200).easing(cc.easeIn(3)));
        sp.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
    },

    update: function (dt) {
        if (GameManager.getState() != GameState.running)return;

        var minx = this.bat.x - Const.BOUNDS_LEFT;
        var maxx = this.bat.x + Const.BOUNDS_LEFT;
        var len = this.ballArr.length;
        for (var i = len - 1; i >= 0; i--) {
            /**
             * @type Ball
             */
            var ball = this.ballArr[i];
            ball.move(dt);
            if (ball.collision(minx, maxx)) {//要检查碰撞后，再检查边界
                ball.reverseMove();
                GameManager.score++;
                this.updatePanelScore();
            } else {
                if (ball.y <= Const.FLOOR_H) {//超出边界啦
                    GameManager.hp--;
                    BallPool.put(ball);
                    this.ballArr.splice(i, 1);
                    this.updatePanelHp();
                    if (GameManager.hp == 0) {
                        Over.show(this);
                        return;
                    }
                } else if (ball.y >= cc.winSize.height) {
                    BallPool.put(ball);
                    this.ballArr.splice(i, 1);
                }
            }
        }
    },

    updatePanelScore: function () {
        this.scoreTF.setString(GameManager.score);
    },

    updatePanelHp: function () {
        this.hpArr[4 - GameManager.hp].visible = false;
    },

    addBat: function () {
        var size = cc.winSize;
        this.bat = new cc.Sprite("#res/ban.png");
        this.bat.anchorY = 0;
        this.bat.x = size.width / 2;
        this.bat.y = Const.FLOOR_H - 52;
        this.addChild(this.bat);

    },

    addTouchArea: function () {
        var size = cc.winSize;

        var lastTouchPosX = 0;
        var node = ccs.load(res.touch_json).node;
        this.addChild(node);
        node.setContentSize(size);
        ccui.helper.doLayout(node);

        var heartCon = ccui.helper.seekWidgetByName(node, "heartCon");
        heartCon.y = cc.winSize.height * 0.3;
        var touchArea = ccui.helper.seekWidgetByName(node, "touchArea");
        touchArea.height = Const.FLOOR_H;
        var touchCir = ccui.helper.seekNodeByName(touchArea, "touchCir");
        var that = this;
        touchArea.addTouchEventListener(function (target, type) {
            if (GameManager.getState() == GameState.running) {
                if (type == ccui.Widget.TOUCH_BEGAN) {
                    lastTouchPosX = touchArea.getTouchBeganPosition().x;
                } else if (type == ccui.Widget.TOUCH_MOVED) {
                    if (!lastTouchPosX) {
                        lastTouchPosX = touchArea.getTouchMovePosition().x;
                    }
                    var deltax = touchArea.getTouchMovePosition().x - lastTouchPosX;
                    that.bat.x += deltax;
                    lastTouchPosX = touchArea.getTouchMovePosition().x;
                    //bounds
                    that.bat.x = limit(that.bat.x, Const.BOUNDS_LEFT, Const.BOUNDS_RIGHT);
                    //update cir
                    touchCir.x = 96 + 493 * ((that.bat.x - Const.BOUNDS_LEFT) / (Const.BOUNDS_RIGHT - Const.BOUNDS_LEFT));
                }
            }
        });

        //desk
        var desk = ccui.helper.seekNodeByName(node, "desk");
        desk && (desk.y = Const.FLOOR_H);

        //top
        var top = ccui.helper.seekWidgetByName(node, "top");
        top.y = size.height;
        this.scoreTF = ccui.helper.seekWidgetByName(node, "scoreTF");
        this.scoreTF.ignoreContentAdaptWithSize(true);
        var pauseBtn = ccui.helper.seekWidgetByName(node, "pauseBtn");
        pauseBtn.addClickEventListener(function () {
            Pause.show(that);
        });

        //hpArr
        this.hpArr = [];
        for (var i = 0; i < 5; i++) {
            this.hpArr.push(ccui.helper.seekNodeByName(node, "heart_" + i));
        }
    }
});

