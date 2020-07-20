let font
let graphic

function preload() {
  font = loadFont('inter-semibold.otf')
}

function setup() {
  createCanvas(1000, 600)

  graphic = createGraphics(1000, 600)

  graphic.fill('lime')
  graphic.textFont(font)
  graphic.textSize(200)
  graphic.textAlign(CENTER, CENTER)
  graphic.text('Dope HipHop', 450, 200, 200, 300)
}

function draw() {
  background("ghostwhite")
  
  const tileSize = 40
  
  for (let x = 0; x < 25; x = x + 1) {
    for (let y = 0; y < 25; y = y + 1) {
      
      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 25
      
      // source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize 
      const dh = tileSize

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

// Fade-in images
inView('.fade')
  .on('enter', img => img.classList.add('visible'))
  .on('exit', img => img.classList.remove('visible'))


// About modal
const aboutLink = document.querySelector(".about")
const aboutModal = document.querySelector(".about-modal")
const close = document.querySelector(".close")

aboutLink.addEventListener("click", function () {
  aboutModal.classList.remove("d-none")
})

close.addEventListener("click", function () {
  aboutModal.classList.add("d-none")
})











