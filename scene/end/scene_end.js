class SceneEnd extends GuaScene{
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.runWithScene(s)
        })
        //bg
        var bg = GuaImage.new(game, 'bg')
        this.addElements(bg)
        log(this.elements)
        log('end bg', bg)
        //get_ready
        var game_over = GuaImage.new(game, 'game_over')
        game_over.x = 100
        game_over.y = 200
        this.addElements(game_over)
    }
    draw(){
        super.draw()
        this.game.context.fillStyle = "#000"
        this.game.context.fillText('按f5重新开始游戏', 130, 290)
    }
}
