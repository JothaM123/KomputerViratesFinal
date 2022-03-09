var bgimg, background2, logoimg, cd, logo, start, home1, cds, cdsG, restart, about, gameSound, retro, gif, png, abtbg, enemy, player, coin, v1, v2, v3
var gameState = "wait"
var boyRun
var points = 0
var coinsGroup, enemiesGroup, unlocked, unlockSprite, antiunlock, antiunlocksprite

var level
var levelImg

var popup
var medal


var medalSprite

var bgmusic

let rollBoy

let over

let gameovr

let un

let popsound

let coinm
let weapon, weaponimg

let finalw

let weaponLeft

function preload() {
    bgimg = loadImage("background.png")
    logoimg = loadImage("kv.png")
    // startimg = loadImage("play.png")
    weaponimg = loadAnimation("space 1.png", "space 2.png", "space 3.png", "space 4.png")
    //gif = loadImage("background.gif")
    abtbg = loadImage("abtbg.jpg")
    // l1bg = loadImage("https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif")
    v1 = loadImage("virus.png")
    v2 = loadImage("virus2.png")
    v3 = loadImage("virus 3.png")
    coinimg = loadImage("floppy.png")
    boyRun = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png")
    l2bg = loadImage("60c8a61a4f0f648a280c7dc8156baec1.gif")
    boyRunleft = loadAnimation("left/1.png", "left/2.png", "left/3.png", "left/4.png", "left/5.png", "left/6.png")
    cd = loadImage("flying cd1.gif")
    l1bg = loadImage("bg.gif")
    unlocked = loadImage("key unlocked.png")
    antiunlock = loadImage("antivirus unlocked.png")
    unlock = loadImage("openlock.gif")
    medal = loadImage("medal.png")
    levelImg = loadImage("level.png")

    bgmusic = loadSound("bgmusic.mp3")

    rollBoy = loadAnimation("roll (1).png", "roll (2).png", "roll (3).png", "roll (4).png", "roll (5).png", "roll (6).png")


    over = loadSound("over.wav")


    coinm = loadSound("coin.wav")

    popup = loadImage("popupmain.png")

    w = loadImage("You Win!.png")


    int = loadImage("interior.jpg")


    finalw = loadSound("winfin.wav")


    gameovr = loadImage("Game Over!.png")


    weaponLeft = loadAnimation("flip/w1.png", "flip/w2.png", "flip/w3.png", "flip/w4.png")


    popsound = loadSound("pop.wav")

}


function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)
    logo = createSprite(width / 2 - 20, height / 2 - 20)
    logo.addImage(logoimg)
    // logo.debug = true
    logo.setCollider("circle", 0, 0, 40)


    home1 = createImg("home.png")
    home1.position(width / 2 - 100, height - 100)
    home1.size(200, 100)
    home1.hide()

    start = createImg("play.png")
    start.position(width / 3 + 200, height - 150)
    start.size(225, 195)

    about = createImg("about.png")
    about.position(width / 3, height - 161)
    about.size(225, 215)

    player = createSprite(width / 4, height - 200)
    // player.addImage()
    player.addAnimation("Runright", boyRun)
    player.addAnimation("Runleft", boyRunleft)
    player.addAnimation("Roll", rollBoy)

    player.scale = 2
  //  player.debug = true
    player.setCollider("rectangle", 0, 0, 25, 100)






    // background2= createSprite(width / 2, height / 2)
    //background2.addImage(gif)
    //background2.scale = 2
    // background2.visible = false

    unlockSprite = createSprite(width / 2, height / 2)
    unlockSprite.addImage(unlocked)
    unlockSprite.visible = false

    antiunlocksprite = createSprite(width / 2, height / 2)
    antiunlocksprite.addImage(antiunlock)
    antiunlocksprite.visible = false

    medalSprite = createSprite(width - 100, 100)
    medalSprite.addImage(medal)
    medalSprite.scale = .5

    level = createSprite(100, 100)
    level.addImage(levelImg)
    level.scale = .8
    level.visible = false






    unlockantivirus = createSprite(width / 2, height / 2)
    unlockantivirus.addImage(unlock)
    unlockantivirus.visible = false

    coinsGroup = new Group()
    enemiesGroup = new Group()



    cdsG = new Group()

    weaponsG = new Group()
    gameState = "wait"
}




function draw() {



    if (gameState === "wait") {

        background(bgimg)
        home1.hide()
        start.show()
        about.show()
        logo.visible = true
        player.visible = false
        enemiesGroup.destroyEach()
        unlockSprite.visible = false
        antiunlocksprite.visible = false
        medalSprite.visible = false
        level.visible = false

    }





    about.mousePressed(() => {
        gameState = "about"
        medalSprite.visible = false
        about.hide()
        popsound.play()
        // Swal.fire({                                                 
        //     imageUrl: "popupmain.png",                                                 
        //     imageWidth: 400,                                                 
        //     imageHeight: 308,                                                 
        //     showConfirmButton : false                                                 
        // })                                                 

    })


    start.mousePressed(() => {
        gameState = "level 1"
        unlockSprite.visible = false
        antiunlocksprite.visible = false
        popsound.play()
        bgmusic.loop()
    })

    home1.mousePressed(() => {
        gameState = "wait"
        antiunlocksprite.visible = false
        popsound.play()
    })



    if (gameState === "level 1") {
        background(l1bg)

        logo.visible = false
        player.visible = true
        about.hide()
        home1.hide()
        antiunlocksprite.visible = false
        medalSprite.visible = true

        start.hide()

        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 15
            player.changeAnimation("Runright", boyRun)

        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 15
            player.changeAnimation("Runleft", boyRunleft)

        }

        if (keyDown(UP_ARROW)) {
            player.y = player.y - 15
            player.changeAnimation("Roll", rollBoy)

            setTimeout(() => {
                player.changeAnimation("Runright", boyRun)
            }, 1000)



        }
        if (keyDown(DOWN_ARROW)) {
            player.y = player.y + 15
            player.changeAnimation("Runright", boyRun)

        }
        if (player.x < 0) {
            player.x = 10
        }
        if (player.x > width) {
            player.x = width - 100
        }


        if (player.y > height) {
            player.y = height - 10
        }
        if (player.y < 0) {
            player.y = 10
        }

        //level 1 clear
        if (points > 9) {
            gameState = "levelcleared"
            level.visible = false
            medalSprite.visible = false

        }



        for (i = 0; i < coinsGroup.length; i++) {
            if (player.isTouching(coinsGroup.get(i))) {
                coinsGroup.get(i).destroy()
                points = points + 2
                console.log(points)
                coinm.play()



                if (points > 10) {
                    gameState = "level 2"
                }
            }
        }

        for (i = 0; i < enemiesGroup.length; i++) {
            if (player.isTouching(enemiesGroup.get(i))) {
                enemiesGroup.get(i).destroy()
                console.log(points)


                bgmusic.pause()
                over.play()
                gameState = "end"

            }
        }



        spawnEnemies()
        spawnCoins()
    }


    if (gameState === "levelcleared") {
        background(l1bg)
        enemiesGroup.destroyEach()
        player.visible = false
        unlockSprite.visible = true
        antiunlocksprite.visible = false
        coinsGroup.destroyEach()
        if (keyDown("n")) {
            gameState = "level 2"

        }

    }
    if (gameState === "levelcleared2") {
        background(l2bg)
        antiunlocksprite.visible = true
        enemiesGroup.destroyEach()
        player.visible = false
        cdsG.destroyEach()
        unlockSprite.visible = false
        unlockantivirus.visible = true
        if (keyDown("n")) {
            gameState = "level 3"
            unlockantivirus.destroy()

        }
    }


    if (gameState === "level 2") {
        background(l2bg)
        player.visible = true
        level.visible = true

        textSize(25)
        fill("red")
        unlockSprite.visible = false


        //level 2 clear
        if (points > 19) {

            //   gameState = "level 3"
            level.visible = false
            medalSprite.visible = false

            gameState = "levelcleared2"
        }
        logo.visible = false
        player.visible = true
        about.hide()
        home1.hide()
        start.hide()

        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 10
            player.changeAnimation("Runright", boyRun)

        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 10
            player.changeAnimation("Runleft", boyRunleft)

        }

        if (keyDown(UP_ARROW)) {
            player.y = player.y - 10
            player.changeAnimation("Roll", rollBoy)

            setTimeout(() => {
                player.changeAnimation("Runright", boyRun)
            }, 1000)


        }
        if (keyDown(DOWN_ARROW)) {
            player.y = player.y + 10
        }
        if (player.x < 0) {
            player.x = 10
        }
        if (player.x > width) {
            player.x = width - 100
        }

        if (player.y > height) {
            player.y = height - 10
        }
        if (player.y < 0) {
            player.y = 10
        }




        for (i = 0; i < cdsG.length; i++) {
            if (player.isTouching(cdsG.get(i))) {
                cdsG.get(i).destroy()
                points = points + 2
                console.log(points)
                coinm.play()
                if (points > 10) {
                    gameState = "level 2"
                    level.visible = false
                    medalSprite.visible = false

                }
            }
        }

        for (i = 0; i < enemiesGroup.length; i++) {
            if (player.isTouching(enemiesGroup.get(i))) {
                enemiesGroup.get(i).destroy()
                console.log(points)



                over.play()
                gameState = "end"

            }
        }




        spawnCds()
        spawnEnemies()
    }

    if (gameState === "about") {
        background(popup)
        logo.visible = false
        home1.hide()
        start.hide()
        player.visible = false
        // about.hide()
        unlockSprite.visible = false
        home1.show()


    }


    if (gameState === "level 3") {
        background(int)
        unlockSprite.visible = false
        antiunlocksprite.visible = false

        player.visible = true
        spawnEnemies()
        if (keyDown("space") && (keyDown(RIGHT_ARROW) || keyDown(LEFT_ARROW))) {


            spawnweapon()
            if (keyDown(RIGHT_ARROW)) {
                weapon.x = (player.x + (player.width) / 2)
                weapon.changeAnimation("shoot", weaponimg)
                weapon.velocityX = 8


            }
            if (keyDown(LEFT_ARROW)) {
                weapon.x = (player.x - (player.width) / 2)

                weapon.changeAnimation("shootleft", weaponLeft)
                weapon.velocityX = -8

            }


        }

        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 15
            player.changeAnimation("Runright", boyRun)
            // weapon.changeAnimation("shoot",weaponimg)


        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 15
            player.changeAnimation("Runleft", boyRunleft)
            //  weapon.changeAnimation("shootleft",weaponLeft)

        }

        if (keyDown(UP_ARROW)) {
            player.y = player.y - 15
        }
        if (keyDown(DOWN_ARROW)) {
            player.y = player.y + 15
        }
        if (player.x < 0) {
            player.x = 10
        }
        if (player.x > width) {
            player.x = width - 100
        }


        if (player.y > height) {
            player.y = height - 10
        }
        if (player.y < 0) {
            player.y = 10
        }
        for (i = 0; i < enemiesGroup.length; i++) {
            if (player.isTouching(enemiesGroup.get(i))) {
                enemiesGroup.get(i).destroy()
                console.log(points)

                bgmusic.pause()

                over.play()
                enemiesGroup.destroyEach()
                player.destroy()
                weaponsG.destroyEach()
                background(gameovr)
                level.visible = false
                medalSprite.visible = false
                gameState = "ovr"
                setTimeout(() => {
                    window.location.reload()
                }, 2500)

            }
        }

        for (i = 0; i < enemiesGroup.length; i++) {
            if (weaponsG.isTouching(enemiesGroup.get(i))) {
                enemiesGroup.get(i).destroy()
                weaponsG.destroyEach()
                points = points + 2
                console.log(points)



            }
        }

        if (points > 44) {
            weaponsG.destroyEach()
            enemiesGroup.destroyEach()
            player.destroy()
            bgmusic.pause()
            background(w)
            level.visible = false
            medalSprite.visible = false



            setTimeout(() => {
                window.location.reload()
            }, 1000);


        }

    }

    if (gameState == "end") {
        background(gameovr)
        player.visible = false
        cdsG.destroyEach()
        coinsGroup.destroyEach()
        enemiesGroup.destroyEach()
        unlockSprite.visible = false
        medalSprite.visible = false
        level.visible = false

        bgmusic.pause()

        setTimeout(() => {
            window.location.href = "index.html"
        }, 2500)




    }
    drawSprites()
    if (gameState === "level 1" || gameState === "level 2" || gameState === "level 3") {
        medalSprite.visible = true
        textSize(25)
        strokeWeight(4)
        stroke("yellow")
        fill("red")
        text("Score " + points, medalSprite.x - 40, medalSprite.y)

        level.visible = true
        textSize(25)
        strokeWeight(4)
        stroke("red")
        fill("yellow")
        text(gameState, level.x - 30, level.y - 15)
    }
}


function spawnEnemies() {
    rand = Math.round(random(100, 200))
    if (frameCount % rand === 0) {
        var randY = Math.round(random(20, height - 20))
        enemy = createSprite(width, randY)
        enemy.scale = 0.5
        enemiesGroup.add(enemy)
        enemy.setCollider("rectangle", 0, 0, 300, 350)
        enemy.velocityX = -10
        enemy.shapeColor = "lightgreen"
        var rand2 = Math.round(random(1, 3))
        switch (rand2) {
            case 1: enemy.addImage(v1)
                break;
            case 2: enemy.addImage(v2)
                break;
            case 3: enemy.addImage(v3)
                break;
            default:
                break;
        }


    }
}

function spawnCoins() {
    rand = Math.round(random(100, 250))
    if (frameCount % rand === 0) {
        var randX = Math.round(random(10, width - 30))
        coin = createSprite(randX, 0)
        coin.velocityY = +5
        coin.addImage(coinimg)
        coin.scale = 0.5
        coinsGroup.add(coin)
    }
}
function spawnCds() {
    rand = Math.round(random(100, 250))
    if (frameCount % rand === 0) {
        var randX = Math.round(random(10, width - 30))
        cds = createSprite(randX, 0)
        cds.velocityY = +5
        cds.addImage(cd)
        cds.scale = 0.4
        cdsG.add(cds)
    }
}

function spawnweapon() {

    weapon = createSprite(player.x + (player.width) / 2, player.y)
    weapon.addAnimation("shoot", weaponimg)
    weapon.addAnimation("shootleft", weaponLeft)
    //weapon.visible=false 
    weapon.velocityX = 8
    weaponsG.add(weapon)

    // console.log("hit")

}
