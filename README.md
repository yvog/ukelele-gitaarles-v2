# Ukelele-Gitaarles v2.0

New company website for ([Ukelele-Gitaarles](https://ukelele-gitaarles.nl))

## Production deployment

```
cd stack/apps/ukelele-gitaarles-v2
sudo su
git pull origin master
npm run prod:stop
npm run prod:cleanup
npm install
npm run build
npm run prod:start
```

## Credits

- Designed by [Vera Geldhof](https://github.com/VGeldhof)
- Developed by [Yvo Geldhof](https://github.com/yvog)
