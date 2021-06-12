controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    gunguy.setImage(gunguyLeftImage)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    gunguy.setImage(gunguyRightImage)
})
/**
 * Add shooting mechanics next week
 * 
 * Bullets should shoot the way we are facing
 * 
 * We will use game.onUpdate and see which image the sprite currently has been set to.
 * 
 * Bullets should get destroyed when they touch zombie.
 * 
 * Add wave mechanics next week
 * 
 * Zombies should move faster and have more health on each wave.
 * 
 * Zombies drop powerups?
 */
let gunguyLeftImage: Image = null
let gunguyRightImage: Image = null
let gunguy: Sprite = null
let zombieImages = [img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f 6 6 6 6 6 6 6 6 f . . 
    f f 6 7 7 7 7 7 6 6 f c . 
    f f 6 6 6 7 7 7 6 6 f c . 
    c c c f 6 6 7 6 6 6 c c . 
    f f f f f 7 7 f f c c f . 
    f f f b f 7 6 f b f f f . 
    . f 6 1 f 7 7 f 1 6 f . . 
    . f 7 6 7 7 7 7 6 7 f . . 
    . f f f 6 7 7 6 f f f . . 
    f 7 f b 7 7 7 7 b f 7 7 . 
    7 6 f 7 7 7 7 7 7 f 6 7 . 
    7 7 f 6 7 7 7 6 6 f 7 7 . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(13)
gunguy = sprites.create(img`
    . f f f f f f . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    . f c c c c f . . . . . . . . . 
    . c c d d c c . . . . . . . . . 
    . d d d d d d . . . . . . . . . 
    . d 2 2 2 2 d . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    . f f f f f f f f f d b b b 4 . 
    . f f f f f f . . . . f f f f . 
    . f f f f f f . . . . f . . . . 
    . f f f f f f f f f d b b b 4 . 
    . f f f f f f . . . . f f f f . 
    . f f f f f f . . . . f . . . . 
    . f f . . f f . . . . . . . . . 
    . f f . . f f . . . . . . . . . 
    . f f . . f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(gunguy)
tiles.placeOnRandomTile(gunguy, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(gunguy)
gunguyRightImage = img`
    . f f f f f f . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    . f c c c c f . . . . . . . . . 
    . c c d d c c . . . . . . . . . 
    . d d d d d d . . . . . . . . . 
    . d 2 2 2 2 d . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    . f f f f f f f f f d b b b 4 . 
    . f f f f f f . . . . f f f f . 
    . f f f f f f . . . . f . . . . 
    . f f f f f f f f f d b b b 4 . 
    . f f f f f f . . . . f f f f . 
    . f f f f f f . . . . f . . . . 
    . f f . . f f . . . . . . . . . 
    . f f . . f f . . . . . . . . . 
    . f f . . f f . . . . . . . . . 
    `
gunguyLeftImage = gunguyRightImage.clone()
gunguyLeftImage.flipX()
