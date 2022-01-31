input.onButtonPressed(Button.A, function () {
    GameEnjoyer.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    GameEnjoyer.change(LedSpriteProperty.X, 1)
})
let YouShallNotPass: game.LedSprite = null
let Time = 0
let GameEnjoyer: game.LedSprite = null
GameEnjoyer = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1000)
    Time += 1
})
basic.forever(function () {
    if (Time <= 10) {
        basic.pause(randint(1000, 1500))
        YouShallNotPass = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            YouShallNotPass.change(LedSpriteProperty.Y, 1)
        }
        if (GameEnjoyer.isTouching(YouShallNotPass)) {
            game.gameOver()
        }
        basic.pause(50)
        game.addScore(1)
        YouShallNotPass.delete()
    }
    if (Time > 10 && Time <= 20) {
        basic.pause(randint(750, 1250))
        YouShallNotPass = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(150)
            YouShallNotPass.change(LedSpriteProperty.Y, 1)
        }
        if (GameEnjoyer.isTouching(YouShallNotPass)) {
            game.gameOver()
        }
        basic.pause(50)
        game.addScore(1)
        YouShallNotPass.delete()
    }
    if (Time > 20 && Time <= 30) {
        basic.pause(randint(500, 1000))
        YouShallNotPass = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            YouShallNotPass.change(LedSpriteProperty.Y, 1)
        }
        if (GameEnjoyer.isTouching(YouShallNotPass)) {
            game.gameOver()
        }
        basic.pause(50)
        game.addScore(1)
        YouShallNotPass.delete()
    }
    if (Time > 30) {
        basic.pause(randint(250, 750))
        YouShallNotPass = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(50)
            YouShallNotPass.change(LedSpriteProperty.Y, 1)
        }
        if (GameEnjoyer.isTouching(YouShallNotPass)) {
            game.gameOver()
        }
        basic.pause(50)
        game.addScore(1)
        YouShallNotPass.delete()
    }
})
