# A bundle excutable http-proxy app

## Install

Global packages:

```
npm install -g typescript^4.2.4 nexe^3.3.7 ts-node^9.1.1
```

Project packages:

```
npm install
```

## Build

To build the windows executable file, just type the build command:

```
npm run build
```

For other platform, please modify the `windows-x64-12.16.3` string at package.json to other platform that nexe is support:

```json
{
  "scripts": {
    "build": "nexe -t windows-x64-12.16.3 -o build/http-proxy-server"
  }
}
```

Nexe support platforms: https://github.com/nexe/nexe/releases/tag/v3.3.3

## Usage

1. Double click the `build/http-proxy-server` executable file, then enter the full proxy server URL.

2. Open a terminal first, then execute the build file with URL argument: `build/http-proxy-server.exe [URL]`.
