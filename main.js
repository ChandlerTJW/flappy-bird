var __main = function() {
    var images = {
        bg: 'img/bird/bg.jpg',
        ground: 'img/bird/ground.png',
        b1: 'img/bird/b1.png',
        b2: 'img/bird/b2.png',
        b3: 'img/bird/b3.png',
        pipe1: 'img/bird/pipe_down.png',
        pipe2: 'img/bird/pipe_up.png',

        get_ready: 'img/bird/get_ready.png',
        game_over: 'img/bird/game_over.png',

        '0': 'img/bird/0.png',
        '1': 'img/bird/1.png',
        '2': 'img/bird/2.png',
        '3': 'img/bird/3.png',
        '4': 'img/bird/4.png',
        '5': 'img/bird/5.png',
        '6': 'img/bird/6.png',
        '7': 'img/bird/7.png',
        '8': 'img/bird/8.png',
        '9': 'img/bird/9.png',
    }
    var game = GuaGame.instance(10, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
