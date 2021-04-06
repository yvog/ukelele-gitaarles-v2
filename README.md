# Ukelele-Gitaarles v2.0

[![Build Status](https://travis-ci.org/yvog/ukelele-gitaarles-v2.svg?branch=master)](https://travis-ci.org/yvog/ukelele-gitaarles-v2)

New company website for Ukelele-Gitaarles ([preview](https://ukelele-gitaarles-v2.vercel.app/)).

### Versions

```
Node            12.18.3 LTS
Next.js         10.0.7
React           16.13.1
TypeScript      ^4.0.3
Sass            ^1.26.11
```

### AWS Lightsail Deployment

```
cd stack/apps/ukelele-gitaarles-v2
sudo su
sudo rm -rf node_modules
sudo npm install
sudo npm run prod:stop
sudo rm -rf .next
sudo npm run build
sudo npm run prod:start
```

# Credits

Designed by [Vera Geldhof](https://github.com/VGeldhof), visit [portfolio](https://verageldhof.nl)  
Developed by [Yvo Geldhof](https://github.com/yvog)

# Known issues

error - ./node_modules/next/dist/next-server/lib/side-effect.js

- delete .next folder
