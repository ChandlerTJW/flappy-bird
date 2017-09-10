class Scene extends GuaScene{
    constructor(game) {
        super(game)
        //bg
        var bg = GuaImage.new(game, 'bg')
        this.addElements(bg)
        //加入水管
        this.pipe = Pipes.new(game)
        this.addElements(this.pipe)
        //循环移动地面
        this.grounds = []
        this.skipCount = 4
        this.score = 0
        this.distance = 200
        this.num1 = null
        this.num2 = null
        for(var i = 0; i < 20; i++){
            var g = GuaImage.new(game, 'ground')
            g.x = i * 20
            g.y = 440
            this.addElements(g)
            this.grounds.push(g)
        }

        //bird
        var b = GuaAnimation.new(game)
        b.x = 152
        b.y = 200
        this.b = b
        this.addElements(b)
        this.setupInputs()
        // var game = this.game

    }
    get_score(){
        var score = this.score
        var game = this.game
        if(score < 10){
            var number1 = '0'
            var number2 = String(score)
            this.num1 = GuaImage.new(game, number1)
            this.num2 = GuaImage.new(game, number2)
            this.num1.x = 160
            this.num1.y = 80
            this.num2.x = 185
            this.num2.y = 80
        }
        if(score >= 10){
            var number1 = String(score)[0]
            var number2 = String(score)[1]
            this.num1 = GuaImage.new(game, number1)
            this.num2 = GuaImage.new(game, number2)
            this.num1.x = 160
            this.num1.y = 80
            this.num2.x = 185
            this.num2.y = 80
            // this.addElements(num1)
            // this.addElements(num2)
        }
    }
    update(){
        this.get_score()
        var game = this.game
        var pipe = this.pipe
        var bird = this.b
        var score = this.score
        super.update()
        this.skipCount--
        this.distance -= 5
        // log(this.distance)
        var offset = -5
        if(this.skipCount == 0){
            this.skipCount = 4
            offset = 15
        }
        if(this.distance < 0){
            this.score++
            log(this.score)
            this.distance = 200
        }
        for(var i = 0; i < 20; i++){
            var g = this.grounds[i]
            g.x += offset
        }
        if(pipe.upCollide(bird) || pipe.downCollide(bird)){
            this.b.vy = -this.b.vy
            var s = SceneEnd.new(game)
            setTimeout(function(){
                game.runWithScene(s)
            },1000)
        }

    }
    draw(){
        super.draw()
        this.game.drawImage(this.num1)
        this.game.drawImage(this.num2)
        // this.game.context.fillStyle = "#000"
        // this.game.context.fillText('按k游戏开始', 100, 290)
    }
    setupInputs(){
        var self = this
        self.game.registerAction('a', function(keyStatus){
            self.b.move(-2, keyStatus)
        })
        self.game.registerAction('d', function(keyStatus){
            self.b.move(2, keyStatus)
        })
        self.game.registerAction('j', function(keyStatus){
            self.b.jump()
        })
    }
}
