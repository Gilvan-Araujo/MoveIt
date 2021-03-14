<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the moveitnext and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** gilvan-araujo, moveitnext, twitter_handle, gilvanjunior@protonmail.com, MoveItNext, Application developed for the fourth edition of the Next Level Week by Rocketseat.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Codefactor][codefactor-shield]][codefactor-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gilvan-araujo/moveitnext">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MoveItNext</h3>

  <p align="center">
    Application developed for the fourth edition of the Next Level Week by Rocketseat.
    <br />
    <a href="https://moveit-gray.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/gilvan-araujo/moveitnext/issues">Report Bug</a>
    ·
    <a href="https://github.com/gilvan-araujo/moveitnext/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![screenshot-moveit](https://user-images.githubusercontent.com/45008443/109997853-66e14780-7cef-11eb-9902-eb41763b383f.png)](https://moveit-gray.vercel.app/)

### Built With

* [React JS](https://reactjs.org/)
* [Next.JS](https://nextjs.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* yarn

  ```sh
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt update && sudo apt install --no-install-recommends yarn
  export PATH="$PATH:`yarn global bin`"
  ```

  See if it's installed with

  ```sh
  yarn --version
  ```

* npm and node.js

  ```sh
  sudo apt install npm nodejs
  ```

### Installation

1. Clone the moveitnext

   ```sh
   git clone https://github.com/gilvan-araujo/moveitnext.git
   ```

2. Add TypeScript support through yarn

   ```sh
   yarn add typescript @types/react @types/react-dom @types/node -D
   ```

3. And support for cookies

   ```sh
   yarn add @types/js-cookie -D
   ```

<!-- USAGE EXAMPLES -->
## Usage

This project can be used to help people that stay in front of the computer for too long by having them do exercises for both eyes and body after a set amount of time.
![body-challenge](https://user-images.githubusercontent.com/45008443/110000998-acebda80-7cf2-11eb-8be3-e2476721b673.png)
*Example of a bodily challenge* &nbsp;

![eye-challenge](https://user-images.githubusercontent.com/45008443/110001299-00f6bf00-7cf3-11eb-8452-a71c6f84594c.png)
*Example of an ocular challenge*

![level-up](https://user-images.githubusercontent.com/45008443/110001306-03591900-7cf3-11eb-8335-d8dca6ee0169.png)
*Levelling up screen*

<!-- ROADMAP -->
## Roadmap

### Personal Features

* [ ] Improve responsivity
  * [ ] Media queries for mobile
  * [ ] Look up Next.JS PWA
* [ ] Different color schemes
  * [ ] Dark theme
  * [ ] Grey theme
* [ ] New functionalities
  * [ ] Login through GitHub (OAuth Github)
  * [ ] Serverless Next.JS 
  * [ ] Sidebar and ranking
  * [ ] Share on Twitter

### Issues

See also the [open issues](https://github.com/gilvan-araujo/moveitnext/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Gilvan Araújo - gilvanjunior@protonmail.com

Project Link: [https://github.com/gilvan-araujo/moveitnext](https://github.com/gilvan-araujo/moveitnext)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[codefactor-shield]: https://img.shields.io/codefactor/grade/github/gilvan-araujo/moveitnext?style=for-the-badge
[codefactor-url]: https://www.codefactor.io/repository/github/gilvan-araujo/moveitnext
[contributors-shield]: https://img.shields.io/github/contributors/gilvan-araujo/moveitnext.svg?style=for-the-badge
[contributors-url]: https://github.com/gilvan-araujo/moveitnext/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gilvan-araujo/moveitnext.svg?style=for-the-badge
[forks-url]: https://github.com/gilvan-araujo/moveitnext/network/members
[stars-shield]: https://img.shields.io/github/stars/gilvan-araujo/moveitnext.svg?style=for-the-badge
[stars-url]: https://github.com/gilvan-araujo/moveitnext/stargazers
[issues-shield]: https://img.shields.io/github/issues/gilvan-araujo/moveitnext.svg?style=for-the-badge
[issues-url]: https://github.com/gilvan-araujo/moveitnext/issues
[license-shield]: https://img.shields.io/github/license/gilvan-araujo/moveitnext.svg?style=for-the-badge
[license-url]: https://github.com/gilvan-araujo/moveitnext/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gilvan-araujo
