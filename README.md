# Ukelele-Gitaarles v2.0

New company website for ([Ukelele-Gitaarles](https://ukelele-gitaarles.nl))

## Production deployment

```
cd stack/apps/ukelele-gitaarles-v2
sudo su
git pull origin master
sudo npm run prod:stop
rm -rf node_modules .next
sudo npm install
sudo npm run build
sudo npm run prod:start
```

## Credits

Designed by [Vera Geldhof](https://github.com/VGeldhof), visit [portfolio](https://verageldhof.nl)  
Developed by [Yvo Geldhof](https://github.com/yvog)
