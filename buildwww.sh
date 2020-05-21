#!/usr/bin/env bash

GOOGLE_MAPS_JS_API_KEY=$(grep 'GOOGLE_MAPS_BROWSER_API_KEY' config.xml | sed  's/^.*value="\(.*\)".*$/\1/g'|tr -d '\n')
# echo "API_KEY=${GOOGLE_MAPS_JS_API_KEY}"
if [ -z "${GOOGLE_MAPS_JS_API_KEY}" ]; then
  echo "Please input the Google Maps JavaScript API key: "
  read GOOGLE_MAPS_JS_API_KEY
fi

GOOGLE_MAPS_JS_API_KEY=$(echo "${GOOGLE_MAPS_JS_API_KEY//[$'\t\r\n ']}")|tr -d '\n'
rm -rf www/ docs/
ionic cordova build browser
ln -s www/index.html www/404.html
# cp platforms/browser/config.xml www/
mv www docs
grep -rl '(YOUR_API_KEY_IS_HERE)' ./docs/ | xargs sed -i '' 's/(YOUR_API_KEY_IS_HERE)/${GOOGLE_MAPS_JS_API_KEY}/g'
