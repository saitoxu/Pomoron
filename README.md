# Pomoron

Simple pomodoro technique timer

## Development

```sh
$ git clone https://github.com/saitoxu/Pomoron.git
$ cd Pomoron
$ yarn install
$ electron app.js
$ yarn dev # another shell
```

## Release

```sh
$ electron-packager . Pomoron --platform=darwin --arch=x64 --electron-version=1.6.10 --icon=src/img/icon.icns
```
