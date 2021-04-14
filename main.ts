namespace StatusBarKind {
    export const roke = StatusBarKind.create()
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 . 3 . . . . . . . . . 
    . . . . 3 5 3 . . . . . . . . . 
    . . f f f f f 5 f . . . . . . . 
    . . f e e e e e f . . . . . . . 
    . . f e f e f e f . . . . . . . 
    . . f e e e e e f . . . . . . . 
    . f f e e e e e f f . . . . . . 
    . . . . b e b . . . . . . . . . 
    . . 3 3 e 3 e 3 3 . . . . . . . 
    . e 3 3 a a a 3 3 e . . . . . . 
    e e . . a a a . . e e . . . . . 
    . . . a a a a a . . . . . . . . 
    . . . . e . e . . . . . . . . . 
    . . . 5 5 . 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.smiles)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
