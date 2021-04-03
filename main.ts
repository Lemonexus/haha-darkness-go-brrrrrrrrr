namespace SpriteKind {
    export const Monster = SpriteKind.create()
    export const FakeMonsters = SpriteKind.create()
    export const NormalThing = SpriteKind.create()
}
function makeMonster (night: Image, day: Image) {
    newMonster = sprites.create(night, SpriteKind.Monster)
    daytimeMonster = sprites.create(day, SpriteKind.FakeMonsters)
    nighttimeMonster = sprites.create(night, SpriteKind.FakeMonsters)
    daytimeMonster.setFlag(SpriteFlag.Invisible, true)
    nighttimeMonster.setFlag(SpriteFlag.Invisible, true)
    daytimeMonster.setFlag(SpriteFlag.Ghost, true)
    nighttimeMonster.setFlag(SpriteFlag.Ghost, true)
    sprites.setDataSprite(newMonster, "day", daytimeMonster)
    sprites.setDataSprite(newMonster, "night", nighttimeMonster)
    newMonster.setPosition(randint(50, 1000), randint(0, 100))
    newMonster.follow(vivian, 15)
}
function turnOnTheDark () {
    for (let m of sprites.allOfKind(SpriteKind.Monster)) {
        nightImg = sprites.readDataImage(m, "nightImg")
        m.setImage(nightImg)
        m.follow(vivian, 15)
    }
    setTilemap()
    darkIsOff = false
}
function createAllMonsters () {
    for (let index = 0; index < 3; index++) {
        makeMonster(img`
            . . . . . . e e e e e . . . . . 
            . . . . . e b b 6 6 b e . . . . 
            . . e e e b c c 6 6 6 c e . . . 
            . e b b c c c c c 6 6 6 c e . . 
            . e b c c c c c c c 6 6 c c e . 
            . e b c c c c c c c c c c c e . 
            . e c c c c e c c c c c c c e . 
            . e b c c e . e e c 6 c c c e . 
            . e b c c e . . . e 6 e 6 e . . 
            . e c c c c e . . . 6 . 6 . . . 
            . e b c c c e e . 6 . . 6 . . . 
            . . e c c c c b e e . 6 . . . . 
            . . e c c c c c c b e e . . . . 
            . e c c c c c c c c c b e e e . 
            e b c c c c c c c c c c c c b e 
            . e e e e e e e e e e e e e e . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 . . . . . . . 
            . . 3 . 3 . 3 3 6 3 . . . . . . 
            . 3 . 3 . 3 3 6 6 3 . . . . . . 
            . . 3 . 3 . 3 6 6 3 . . . . . . 
            . 3 . 3 . 3 3 6 3 3 9 . . . . . 
            . . . 3 3 3 3 3 3 9 9 9 9 . . . 
            . . . . . . . . 9 9 9 9 9 9 . . 
            . . . . . . . . . . 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        makeMonster(img`
            . . . . . . f f f . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f f f f f f 6 f . . . . . 
            . . . f f 6 f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f . f . f . . . . 
            . . . f . f f f . . f . . . . . 
            . . . . . f . f . f f . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . . f . . . . . . . . . . 
            `, img`
            . . . . . . f f f . . . . . . . 
            . . . . f f 8 8 8 f . . . . . . 
            . . . . f 6 f 8 8 f f . . . . . 
            . . . f 6 6 6 f f 6 6 . . . . . 
            . . . f 1 1 1 6 6 1 1 f . . . . 
            . . . f 6 6 f 1 1 6 6 f . . . . 
            . . . f 1 1 f 6 6 f 1 f . . . . 
            . . . f 6 6 f 1 1 f 6 f . . . . 
            . . . f 1 1 f 6 6 f 1 f . . . . 
            . . . f 6 6 f 1 1 f 6 f . . . . 
            . . . f 1 1 f 6 6 f 1 f . . . . 
            . . . f 6 6 f f f f 6 f . . . . 
            . . . f 1 1 f . . f 1 f . . . . 
            . . . f 6 6 f . . f 6 f . . . . 
            . . . . f f . . . . f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        makeMonster(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . f 6 6 6 6 f . . 
            . . . . . . . f c c 6 6 6 f . . 
            . . . . . . f c c c 6 6 f . . . 
            . . . . . . f c c c 6 6 f . . . 
            . . . . . . f c c 6 6 6 f . . . 
            . . . . . . f 6 6 6 c c f . . . 
            . . . . . . f 6 6 c c c f . . . 
            . . . . . . f 6 6 c c c f . . . 
            . . . . . . f 6 6 6 c c f . . . 
            . . . . . . f 6 6 6 6 6 f . . . 
            . . . . . f f f 6 6 6 6 f . . . 
            . . . . f 6 6 6 6 6 6 6 f . . . 
            . . . f b b 6 6 6 6 6 6 f . . . 
            . . f f f f f f f f f f f . . . 
            `, img`
            . . . . . . . . . . . . b b . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . 2 2 b . . . . 
            . . . . . . . . 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . 2 2 2 2 b . . . . 
            . . . . . . . . 2 2 2 b . . . . 
            . . . . . b b b b d d b . . . . 
            . . . . 1 1 b b b b b f . . . . 
            . . . . f f f f f f f f . . . . 
            `)
        makeMonster(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . 8 8 f f 8 8 8 8 f f 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 c . 
            . . . 8 8 8 8 8 8 8 8 8 8 c c c 
            . . . . . 8 8 8 8 8 8 8 c c c c 
            . . . . . . . c c c c c c c c c 
            . . . . . . . . . c c c c c c c 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . f f f f f f f f f f . . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 1 1 1 1 1 1 1 1 9 9 f . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 1 1 1 1 1 1 1 1 9 f . . 
            . . f 9 1 1 1 1 1 1 1 1 9 f . . 
            . . f 9 1 1 1 1 1 1 1 1 9 f . . 
            . . f 9 9 9 9 1 1 1 1 1 9 f . . 
            . . f 9 9 9 9 9 1 1 1 1 9 f . . 
            . . f 9 9 9 9 9 9 1 1 1 9 f . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . . f f f f f f f f . . . . 
            `)
    }
}
// Set the tile map to show a dark room
function setTilemap () {
    tiles.loadMap(tiles.createMap(tilemap`level`))
    tiles.setTilemap(tilemap`level_0`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    turnOffTheDark()
    tiles.placeOnRandomTile(vivian, assets.tile`tile3`)
    vivian.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f f d d f . . . . . . . . . . 
        . f d f d d 2 2 2 2 2 2 f f . . 
        f f d d d d 2 2 2 2 2 2 f f . . 
        f f d f d d 2 2 2 2 2 2 f f . . 
        f f f d d d 2 2 2 2 2 2 f f . . 
        . f f f f f . . . . . . . . . . 
        . . f f f . . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.lifespan = 2000
    safeAndSound = true
    controller.moveSprite(sprite, 0, 0)
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (batteryLife.value > 0) {
        vivian.setImage(vivianLightImg)
        turnOffTheDark()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster, function (sprite, otherSprite) {
    if (!(darkIsOff)) {
        game.reset()
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    turnOnTheDark()
    vivian.setImage(vivianDarkImg)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    vivian.setImage(vivianDarkImg)
    turnOnTheDark()
})
function turnOffTheDark () {
    for (let n of sprites.allOfKind(SpriteKind.Monster)) {
        dayImg = sprites.readDataImage(n, "dayImg")
        n.setImage(dayImg)
        n.follow(null)
    }
    redoTiles()
    darkIsOff = true
}
// To redraw the tiles in different colors
function redoTiles () {
    tileImages = [
    assets.tile`tile1`,
    assets.tile`tile2`,
    assets.tile`tile3`,
    assets.tile`tile4`,
    assets.tile`tile5`,
    assets.tile`tile6`,
    assets.tile`tile7`
    ]
    for (let tileImage of tileImages) {
        copiedTile = tileImage.clone()
        copiedTile.replace(12, 13)
        copiedTile.replace(11, 1)
        copiedTile.replace(14, 4)
        tiles.coverAllTiles(tileImage, copiedTile)
    }
}
let copiedTile: Image = null
let tileImages: Image[] = []
let dayImg: Image = null
let safeAndSound = false
let darkIsOff = false
let nightImg: Image = null
let nighttimeMonster: Sprite = null
let daytimeMonster: Sprite = null
let newMonster: Sprite = null
let batteryLife: StatusBarSprite = null
let vivian: Sprite = null
let vivianLightImg: Image = null
let vivianDarkImg: Image = null
let nightMonsterImgs = [img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 f f 8 8 8 8 f f 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 c . 
    . . . 8 8 8 8 8 8 8 8 8 8 c c c 
    . . . . . 8 8 8 8 8 8 8 c c c c 
    . . . . . . . c c c c c c c c c 
    . . . . . . . . . c c c c c c c 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . e e e e e . . . . . 
    . . . . . e b b 6 6 b e . . . . 
    . . e e e b c c 6 6 6 c e . . . 
    . e b b c c c c c 6 6 6 c e . . 
    . e b c c c c c c c 6 6 c c e . 
    . e b c c c c c c c c c c c e . 
    . e c c c c e c c c c c c c e . 
    . e b c c e . e e c 6 c c c e . 
    . e b c c e . . . e 6 e 6 e . . 
    . e c c c c e . . . 6 . 6 . . . 
    . e b c c c e e . 6 . . 6 . . . 
    . . e c c c c b e e . 6 . . . . 
    . . e c c c c c c b e e . . . . 
    . e c c c c c c c c c b e e e . 
    e b c c c c c c c c c c c c b e 
    . e e e e e e e e e e e e e e . 
    `, img`
    e e . . . . . . . . . . . . . . 
    e e e e e e e e . . . . . . . . 
    . e e b b b b b b b b . . . . . 
    . e b b b b b b b b b b b . . . 
    . e b b b b b b b b b b b b . . 
    . e b b b b b b b b b b b b b . 
    e b b b f f b b b b b b b b b . 
    e b b f c c f b b b b b b . f . 
    e b b f c c f b b b . f . . . . 
    e b b b f f b b b . . . . . . . 
    e b b b b b b b b . . . . . . . 
    . e b b b b b b b . . . . . . . 
    . . e b b b b b b . f . . f . . 
    . . . e e b b b b b b b b b b . 
    . . . . . e e e b b b e e e e . 
    . . . . . . . . e e e e . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . f 6 6 6 6 f . . 
    . . . . . . . f c c 6 6 6 f . . 
    . . . . . . f c c c 6 6 f . . . 
    . . . . . . f c c c 6 6 f . . . 
    . . . . . . f c c 6 6 6 f . . . 
    . . . . . . f 6 6 6 c c f . . . 
    . . . . . . f 6 6 c c c f . . . 
    . . . . . . f 6 6 c c c f . . . 
    . . . . . . f 6 6 6 c c f . . . 
    . . . . . . f 6 6 6 6 6 f . . . 
    . . . . . f f f 6 6 6 6 f . . . 
    . . . . f 6 6 6 6 6 6 6 f . . . 
    . . . f b b 6 6 6 6 6 6 f . . . 
    . . f f f f f f f f f f f . . . 
    `, img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f 6 f . . . . . 
    . . . f f 6 f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f . f . f . . . . 
    . . . f . f f f . . f . . . . . 
    . . . . . f . f . f f . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . f . . . . . . . . . . 
    `]
let dayItemImgs = [img`
    . . . f f f f f f f f f f . . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . f 9 9 1 1 1 1 1 1 1 1 9 9 f . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 9 9 9 1 1 1 1 1 9 f . . 
    . . f 9 9 9 9 9 1 1 1 1 9 f . . 
    . . f 9 9 9 9 9 9 1 1 1 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . . f f f f f f f f . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . 3 . 3 . 3 3 6 3 . . . . . . 
    . 3 . 3 . 3 3 6 6 3 . . . . . . 
    . . 3 . 3 . 3 6 6 3 . . . . . . 
    . 3 . 3 . 3 3 6 3 3 9 . . . . . 
    . . . 3 3 3 3 3 3 9 9 9 9 . . . 
    . . . . . . . . 9 9 9 9 9 9 . . 
    . . . . . . . . . . 9 9 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    e . . . . . . . . . . . . . . . 
    c e . . . . . . . . . . . . . . 
    . c e . . . . . . . . . . . . . 
    . . c e . . . . . . . . . . . . 
    . . . c e . . . . . . . . . . . 
    . . . . c e . . . . . . . . . . 
    . . . . . c e . . . . . . . . . 
    . . . . . . c e . . . . . . . . 
    . . . . . . . c e . . . . . . . 
    . . . . . . . . c 5 5 5 . . . . 
    . . . . . . . . 4 5 5 5 e . . . 
    . . . . . . . . 4 5 5 e 5 5 . . 
    . . . . . . . . 4 e e 5 5 5 5 . 
    . . . . . . . . e 4 5 5 4 5 . . 
    . . . . . . . . . 4 5 5 5 . . . 
    . . . . . . . . . . 4 4 . . . . 
    `, img`
    . . . . . . . . . . . . b b . . 
    . . . . . . . . . . . b . . . . 
    . . . . . . . . . 2 2 b . . . . 
    . . . . . . . . 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . . 2 2 2 b . . . . 
    . . . . . b b b b d d b . . . . 
    . . . . 1 1 b b b b b f . . . . 
    . . . . f f f f f f f f . . . . 
    `, img`
    . . . . . . f f f . . . . . . . 
    . . . . f f 8 8 8 f . . . . . . 
    . . . . f 6 f 8 8 f f . . . . . 
    . . . f 6 6 6 f f 6 6 . . . . . 
    . . . f 1 1 1 6 6 1 1 f . . . . 
    . . . f 6 6 f 1 1 6 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f 1 1 f 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f 1 1 f 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f f f f 6 f . . . . 
    . . . f 1 1 f . . f 1 f . . . . 
    . . . f 6 6 f . . f 6 f . . . . 
    . . . . f f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
vivianDarkImg = img`
    . f f f f f f f f f f f f . . . 
    f f f . f f f f f b b f f f . . 
    f f . f f f f f b b b b f f . . 
    f f . f f f f b b b b b b b f . 
    . . . f f f b b b f b b b f f . 
    . . . f f b b b b b b b b b f . 
    . . . . f b b b b b b b b b f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c c b 8 8 c c c c f . 
    . . . . . f 8 b 8 8 c c c c f . 
    . . . . . f f f 8 8 f f f f f . 
    . . . . . 6 f f f f f f f . . . 
    . . . . . . f b b b f f b b b . 
    `
vivianLightImg = img`
    . f f f f f f f f f f f f . . . 
    f f f . f f f f f d d f f f . . 
    f f . f f f f f d d d d f f . . 
    f f . f f f f d d d d d d d f . 
    . . . f f f d d d f d d d f f 5 
    . . . f f d d d d d d d d d 5 . 
    . . . . f d d d d d d d d 5 f . 
    . . . . f 2 2 2 2 2 2 2 5 2 f . 
    . . . . f 2 2 2 2 2 2 2 5 2 f . 
    . . . . f 2 d d 2 2 2 5 2 2 f . 
    . . . . f 2 d d 2 2 5 2 2 2 f . 
    . . . . f 2 2 d 8 4 2 2 2 2 f . 
    . . . . . f 8 d 8 4 5 5 5 5 5 5 
    . . . . . f f f 8 4 f f f f f . 
    . . . . . . f f f f 5 5 f . . . 
    . . . . . . f d d d f f 5 5 d . 
    `
setTilemap()
vivian = sprites.create(vivianDarkImg, SpriteKind.Player)
controller.moveSprite(vivian)
scene.cameraFollowSprite(vivian)
vivian.setStayInScreen(true)
tiles.placeOnTile(vivian, tiles.getTileLocation(3, 5))
batteryLife = statusbars.create(20, 4, StatusBarKind.Health)
batteryLife.attachToSprite(vivian)
game.onUpdate(function () {
    if (darkIsOff && !(safeAndSound)) {
        batteryLife.value--
    }
})
