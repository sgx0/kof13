var KING= cc.Sprite.extend({
    id   : 'KING',
    fullname : 'King',
    name : '京',
    des  : 'SNK创作的首位女性格斗家，格斗技是泰拳，曾经女扮男装在泰拳大赛中获得冠军，但由于她的弟弟身上患有一种病，行动不方便而且手术费极为昂贵，而King参加泰拳大赛未果，所以亟需用钱的King带着弟弟来到了全世界最多格斗比赛的地方——南镇，King希望在南镇的格斗比赛中得胜赚取奖金，作为弟弟的手术费。',
    pos  : 'L',//L--左边，R--右边
    backpose : null,//角色选择页面 sprite--背景人物
    mandes : null,//角色选择页面 sprite--人物信息
    stance : null,//角色选择页面 sprite--人物展示台动作
    stanceparam : {'w':124,'h':234,'p':cc.p(-145,-10),'fc':9},
    fightparam : {'stance' : cc.p(-230,-230)},
    body : {},
    init : function(){
        var flag = false;
        if(this._super){
            this.initBackPose();
            flag = true;
        }
        return flag;
    },
    initBackPose : function(){
        this.backpose = cc.Sprite.create(backposes[this.id.toLowerCase()]);
        this.backpose.setScale(0.8);
        this.backpose.setPosition(-385,-105);
    }
});
KING.create = function(){
    var sg = new KING();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
}