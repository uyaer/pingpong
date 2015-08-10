var GameState = {
    /**
     * 没有开始，显示开始菜单
     */
    un_start:0,
    /**
     * 点击路开始，显示准备状态
     */
    readying:2,
    /**
     * 正常游戏状态
     */
    running:3,
    /**
     * 暂停
     */
    pause:4,
    /**
     * 游戏失败
     */
    over:5
}

var GameManager = {
    /**
     * 游戏状态
     */
    _state:GameState.un_start,
    /**
     * 上一个状态
     */
    _prevState:GameState.un_start,
    setState:function(st){
        this._prevState = this._state;
        this._state = st;
    },
    getState:function(){
        return this._state;
    },
    getPrevState:function(){
        return this._prevState;
    },
    resumeState:function(){
        this.setState(this._prevState);
    },
    /**
     * 分数
     */
    score:0,
    /**
     * 历史最高分数
     */
    maxScore:0,
    /**
     * 当前生命
     */
    hp:5,
    /**
     * 最大生命
     */
    maxHp:5,
    /**
     * 游戏等级
     */
    level:1,

    /**
     * 重置游戏状态
     */
    reset:function(){
        this.score = 0;
        this.hp = 5;
        this.level = 1;
        this._state = GameState.un_start;
        this._prevState = GameState.un_start;
    }
}