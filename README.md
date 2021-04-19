# BillingApp

An example of deep linking execution in React Native using TypeScript and `react-navigation`.

![demo](https://user-images.githubusercontent.com/1857263/115290590-936aea80-a108-11eb-87bb-d585ce1008d4.gif)

## Installation

```shell
npm i -s @react-navigation/native
npm i -s @react-navigation/stack --force
npm i -s react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
react-native link
cd ios
pod install
```

## Running

```shell
react-native run-ios # run-android 
```

## Testing on iOS

Open Safari and navigate to `billing-app://billing/5`

## Testing on Android

```shell
adb shell am start \
        -W -a android.intent.action.VIEW \
        -d billing-app://billing/5 com.billingapp/.MainActivity
```

## Sponsorship

Thank you to our sponsors:

[<img width="300px" src="https://user-images.githubusercontent.com/1857263/114124204-c4e1eb80-98a8-11eb-80ab-64683c24bbc5.png" alt="Reactive Lions™" target="_blank">](https://www.reactivelions.com)

## License

[MIT](./LICENSE)

Copyright (c) 2021 Eugene Hauptmann