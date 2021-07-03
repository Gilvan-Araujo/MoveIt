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
    <img src="public/logo.svg" alt="Logo" height="80">
  </a>

  <h3 align="center">MoveIt</h3>

  <p align="center">
    Application developed for the fourth edition of the Next Level Week by Rocketseat.
    <br />
    <a href="https://moveit-gray.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/gilvan-araujo/moveit/issues">Report Bug</a>
    ·
    <a href="https://github.com/gilvan-araujo/moveit/issues">Request Feature</a>
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

[![screenshot-moveit](https://user-images.githubusercontent.com/45008443/124353931-d274ec00-dbdf-11eb-8111-6f1d99600f77.png)](https://moveit-gray.vercel.app/)

### Built With

* [React JS](https://reactjs.org/)
* [Next.JS](https://nextjs.org/)
* [Chakra UI](http://chakra-ui.com/)

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
  yarn -v
  ```

* node and npm

  ```sh
  sudo apt install npm nodejs
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/gilvan-araujo/moveit.git
   ```

2. Install dependencies

   ```sh
   yarn
   ```

3. Run it locally

   ```sh
   yarn dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

This project was built with the intent of helping people that stay in front of the computer for too long by having them do exercises for both eyes and body after a set amount of time.

![body-challenge](https://user-images.githubusercontent.com/45008443/124353955-eddff700-dbdf-11eb-8eab-902f4b17a023.png)
*Example of a bodily challenge* &nbsp;

![eye-challenge](https://user-images.githubusercontent.com/45008443/124353935-d43eaf80-dbdf-11eb-89ef-fa3f5cdb0693.png)
*Example of an ocular challenge*

![level-up](https://user-images.githubusercontent.com/45008443/124353933-d3a61900-dbdf-11eb-8758-2ccaf33aadb3.png)
*Levelling up screen*

<!-- ROADMAP -->
## Roadmap

### Proposed Features

* Improve responsivity
  * [x] Media queries for mobile
  * [x] Implement PWA
* Different color schemes
  * [x] Dark theme
  * [ ] Light theme and toggle
* New functionalities
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
2. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
3. Commit your Changes (`git commit -m ':sparkles: feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Gilvan Araújo - gilvanjunior@pm.me

Project Link: [https://github.com/gilvan-araujo/moveit](https://github.com/gilvan-araujo/moveit)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[codefactor-shield]: https://img.shields.io/codefactor/grade/github/gilvan-araujo/moveit?style=for-the-badge
[codefactor-url]: https://www.codefactor.io/repository/github/gilvan-araujo/moveit
[contributors-shield]: https://img.shields.io/github/contributors/gilvan-araujo/moveit.svg?style=for-the-badge
[contributors-url]: https://github.com/gilvan-araujo/moveit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gilvan-araujo/moveit.svg?style=for-the-badge
[forks-url]: https://github.com/gilvan-araujo/moveit/network/members
[stars-shield]: https://img.shields.io/github/stars/gilvan-araujo/moveit.svg?style=for-the-badge
[stars-url]: https://github.com/gilvan-araujo/moveit/stargazers
[issues-shield]: https://img.shields.io/github/issues/gilvan-araujo/moveit.svg?style=for-the-badge
[issues-url]: https://github.com/gilvan-araujo/moveit/issues
[license-shield]: https://img.shields.io/github/license/gilvan-araujo/moveit.svg?style=for-the-badge
[license-url]: https://github.com/gilvan-araujo/moveit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gilvan-araujo
