const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

;(async () => {
  const files = await imagemin(['public/**/*.{jpg,png}'], {
    destination: '/imagemin',
    plugins: [imageminWebp({ quality: 100 })],
  })
})()
