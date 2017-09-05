class SceneTitle extends GuaScene{
    constructor(game) {
        super(game)
        game.registerAction('j', function(){
            var s = Scene.new(game)
            game.runWithScene(s)
        })
        //bg
        var bg = GuaImage.new(game, 'bg')
        this.addElements(bg)
        //get_ready
        var get_ready = GuaImage.new(game, 'get_ready')
        get_ready.x = 100
        get_ready.y = 200
        this.addElements(get_ready)
    }
    draw(){
        super.draw()
        this.game.context.fillStyle = "#000"
        this.game.context.font = "20px 微软雅黑"
        this.game.context.fillText('按j游戏开始', 140, 290)
    }
}
