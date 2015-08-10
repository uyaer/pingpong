/**
 * Created by hc on 15/4/25.
 */
var Ball = cc.Sprite.extend({
    speed: 200,
    speedX: 0,
    level: 1,
    _scaleTime: 0.1,
    /**
     * 移动的目标点
     */
    _targetX: 0,
    ctor: function (lv) {
        this._super("#res/ball.png");
        this.anchorY = 0;

        this.level = lv;

        this.initPos();
        this.initSpeed();
    },
    collision: function (min, max) {
        if (this.y <= Const.FLOOR_H) {
            this.y += Const.FLOOR_H - this.y;
            return isLimit(this.x, min, max);
        }
        return false;
    },
    move: function (dt) {
        this.y -= this.speed * dt;
        this.x += this.speedX * dt;
    },
    reverseMove: function () {
        this.speed *= -1;
        this.speedX *= -1;
        this.runAction(cc.scaleTo(this._scaleTime, 0.2));
    },
    reuse: function (lv) {
        this.level = lv;

        this.initPos();
        this.initSpeed();
    },
    unuse: function () {
        this.removeFromParent();
    },

    initPos: function () {
        var size = cc.winSize;
        this._targetX = randomInt(Const.Ball_R, size.width - Const.Ball_R);
        this.x = size.width / 2;
        this.y = size.height;
    },
    initSpeed: function () {
        this.speed = 750 + this.level * 60;
        this._scaleTime = (cc.winSize.height - Const.FLOOR_H) / this.speed;
        this.speedX = (this._targetX - cc.winSize.width / 2) / this._scaleTime;
        this.scale = 0.2;
        this.runAction(cc.scaleTo(this._scaleTime, 1));
    }
});

var BallPool = {
    get: function (lv) {
        if (!cc.pool.hasObject(Ball)) {
            return new Ball(lv);
        } else {
            return cc.pool.getFromPool(Ball, lv);
        }
    },
    put: function (ball) {
        cc.pool.putInPool(ball);
    },
    clear: function () {
        cc.pool.drainAllPools();
    }
}