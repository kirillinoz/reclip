# Reclip
[Demo](https://reclip.vercel.app) | [Code](https://github.com/kirillinoz/reclip)

## Overview
Reclip is a web application that allows you to edit videos into 9:16 format for short type content (YouTube Shorts, TikTok and Instagram Reels). You can easily slide the frame into the position where you want video to be cropped. You can use the playback to see if the part of the video you want to crop will be inside the frame.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Folder Structure](#folder-structure)
* [Packages Used](#packages-used)

## Installation
1) `git clone https://github.com/kirillinoz/reclip.git`
2) `cd reclip`
3) `npm install`

## Usage
1) `npm run start`
2) Open your browser and go to http://localhost:3000

## Folder Structure
```bash
- /public
  - /icons
    - /frame
    - /media
    - /player
  - /img
    - /features
- /src
  - /assets
  - /components
    - /editor
  - /views

```
## Packages Used
```bash
reclipify@0.0.0
├── @ffmpeg/core@0.10.0
├── @ffmpeg/ffmpeg@0.10.1
├── @splitbee/web@0.3.0
├── @types/react-dom@18.0.6
├── @types/react@18.0.15
├── @types/video.js@7.3.44
├── @typescript-eslint/eslint-plugin@5.32.0
├── @typescript-eslint/parser@5.32.0
├── @vitejs/plugin-react@2.0.0
├── autoprefixer@10.4.8
├── axios@0.27.2
├── eslint-plugin-react@7.30.1
├── eslint@8.21.0
├── http-proxy-middleware@2.0.6
├── postcss@8.4.14
├── react-dom@18.2.0
├── react-draggable@4.4.5
├── react-ga@3.3.1
├── react-player@2.10.1
├── react-router-dom@6.3.0
├── react@18.2.0
├── tailwindcss@3.1.7
├── typescript@4.7.4
├── video.js@7.20.1
├── vite-plugin-cross-origin-isolation@0.1.6
└── vite@3.0.4
```
