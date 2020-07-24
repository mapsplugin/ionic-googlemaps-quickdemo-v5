# @ionic-native/google-maps@5.26.0 demo

This demo application is aim to describe how to use `@ionic-native/google-maps` with Ionic 6.9.2.

New features of `cordova-plugin-googlemaps@2.8.0` are `DirectionsService` and `ElevationService`.


- [sample.apk](https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v5/blob/master/sample.apk?raw=true)
- [browser demo](https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v5/)


## Change the API keys

Please replace the API keys in the `config.xml` file with your API keys.
Defined API keys are restricted. You can not use these keys in your app.

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="ionic.gmaps.quickdemo" version="5.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
  ...
  <preference name="GOOGLE_MAPS_ANDROID_API_KEY" value="AIza..LWw" />
  <preference name="GOOGLE_MAPS_IOS_API_KEY" value="AIza..ONlc" />
  <preference name="GOOGLE_MAPS_BROWSER_API_KEY" value="AIzaSy...oBaw" />
</widget>
```

-----------

# How to use?

```
$> ionic cordova plugin add github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps

$> npm install @ionic-native/google-maps@5.27.0-beta-20200630
```
