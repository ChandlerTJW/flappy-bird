class Pipes{
    constructor(game){
        this.game = game
        this.pipes = []
        this.upPipes = []
        this.downPipes = []
        this.pipeSpace = 100
        this.ppSpace = 200
        this.columnsOfPipe = 3
        for(var i = 0;i < this.columnsOfPipe; i++){
            var p1 = GuaImage.new(game, 'pipe1')
            p1.flipX = true
            p1.x = 300 + i * this.ppSpace
            var p2 = GuaImage.new(game, 'pipe2')
            p2.x = p1.x
            this.reSetPipesPositions(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
            this.upPipes.push(p1)
            this.downPipes.push(p2)
        }
    }
    static new(game){
        return new this(game)
    }
    reSetPipesPositions(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    upCollide(bird){
        for(var p1 of this.upPipes){
            if(bird.x+bird.w>=p1.x && bird.x <= p1.x + p1.w){
                if(bird.y <= p1.y + p1.h){
                    return true
                }
            }
        }
        return false
    }
    downCollide(bird){
        for(var p2 of this.downPipes){
            if(bird.x+bird.w>=p2.x && bird.x <= p2.x + p2.w){
                if(bird.y + bird.h >= p2.y ){
                    return true
                }
            }
        }
        return false
    }
    update(){
        // log(this.upPipes )
        for(var p of this.pipes){
            p.x -= 5
            if(p.x < -100){
                p.x += this.ppSpace * this.columnsOfPipe
            }
        }
    }
    draw(){
        var context = this.game.context
        for(var p of this.pipes) {
            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1: 1
            var scaleY = p.flipY ? -1: 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
}
