const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

;(async () => {
  await imagemin(['public/**/*.{jpg,png}'], {
    destination: '/imagemin',
    plugins: [imageminWebp({ quality: 100 })],
  })
  console.log('Images optimized')
})()
