const artists = document.querySelectorAll('.artist')
const bodyTag = document.querySelector('body')
let z = 100

artists.forEach(artist => {
  // NOT document
  const artistInfo = artist.querySelector('.details')
  artist.addEventListener('click', function() {
    artistInfo.classList.toggle('d-none')
    artist.style.zIndex = z
    z = z + 1
  })
})
