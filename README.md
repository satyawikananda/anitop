<div align="center">
<h1>Anitop: Anitrendz Unofficial API</h1>

<p>Get the current data of anime trending just from the API</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/satyawikananda/anitop/main/LICENSE?token=AH44ZFCECOH3C2ATJJKGDFK7545TK)
[![Issue](https://img.shields.io/github/issues/satyawikananda/anitop)](https://img.shields.io/github/issues/satyawikananda/anitop)
[![Forks](https://img.shields.io/github/forks/satyawikananda/anitop)](https://img.shields.io/github/forks/satyawikananda/anitop)
[![Stars](https://img.shields.io/github/stars/satyawikananda/anitop)](https://img.shields.io/github/stars/satyawikananda/anitop)

</div>

# Description

Anitop is an open source project and simple unofficail API from [Anitrendz's](https://anitrendz.net/) site to get the current data of anime trending. For the datas was scrapped from many pages in menu charts in that website, for the routes, you can see it below.

# Tech Stack
For the tech stack, Anitop was using :
1. Typescript
2. Node JS
3. Axios
4. Cherrio
5. Vercel
6. and many utilities

# List routes Anitop API
For now, Anitop has a seven routes to get the current data of anime trending and each endpoints, that is has a one query params named `limit`, that query params can make a limitation display data and the value is a type data number

| Name API | Description | Route | 
|----------|------------ | ---------|
| Index | Get all list and info about this API | / |
| Top Anime | Get all the current trending data anime in this season | /api/v1/top-anime | 
| Music Chart | Get all the current trending data chart of music anime or jpop | /api/v1/music-chart | 
| Couple | Get all the current trending data of couple ship | /api/v1/couple-ship | 
| Male Character | Get all the current trending data of male characters | /api/v1/male-character |
| Female Character | Get all the current trending data of female characters | /api/v1/female-character |
| Opening OST song | Get all the current trending data of opening OST songs | /api/v1/opening-song |
| Ending OST song | Get all the current trending data of ending OST songs | /api/v1/ending-song |

# Installation
If you want to add this project in your own machine, you can install this project by following the step below

1. Clone this repository
```
git clone https://github.com/satyawikananda/anitop.git
```
2. Install dependencies

In my case, i'm using pnpm for package manager, you can adjust with your favorite package manager

```
pnpm install
```

> To running my program, you can see object scripts in file `package.json`

# Showcase
If you use this API to your project application, you can register your project in this showcase below :


# Contribution
Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescipt and vercel. Code licensed under [MIT License](https://raw.githubusercontent.com/satyawikananda/anitop/main/LICENSE?token=AH44ZFCECOH3C2ATJJKGDFK7545TK).
