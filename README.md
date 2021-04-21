# Ukelele-Gitaarles v2.0

New company website for  ([Ukelele-Gitaarles](https://ukelele-gitaarles.nl)).

## Versions

```
Node            12.18.3 LTS
Next.js         10.0.7
React           16.13.1
TypeScript      ^4.0.3
Sass            ^1.26.11
```

##  Deployment

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

## Known issues

- Sometimes an error pops up saying something like `./node_modules/next/dist/next-server/lib/side-effect.js` when building
    - fix: delete `.next` folder
