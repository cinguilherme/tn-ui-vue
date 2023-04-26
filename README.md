# Vue.js 3 & Quasar Math Operations SPA

This repository contains a single-page application (SPA) frontend built using Vue.js 3 and the Quasar framework. The application provides a simple login page, and an operations page where users can perform various math operations.
This will require a backend API to be fully functional (not included in this repository) but available here [https://github.com/cinguilherme/tn-t-api]

## Table of Contents

- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Vue.js is a progressive JavaScript framework for building user interfaces. Its core library is focused on the view layer only and is easy to integrate with other libraries or existing projects. Vue.js 3 is the latest version of the framework, offering significant performance improvements and new features.

Quasar is a high-performance, Material Design 2, full front-end stack for Vue.js, which includes a wide range of UI components and features. It allows developers to create responsive, performant, and elegant applications with minimal effort.

This application showcases the capabilities of Vue.js 3 and Quasar by providing a simple yet functional math operations application, where users can perform addition, subtraction, multiplication, and division.

## Technology Stack

- [Vue.js 3](https://v3.vuejs.org/) - JavaScript framework for building user interfaces
- [Quasar](https://quasar.dev/) - Full front-end stack for Vue.js with Material Design 2 components
- [Vuex](https://vuex.vuejs.org/) - State management library for Vue.js applications
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/) v12.x.x or higher
- [NPM](https://www.npmjs.com/) v6.x.x or higher (comes with Node.js)
- [Quasar CLI](https://quasar.dev/quasar-cli/installation) v1.x.x or higher

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/vue-quasar-math-operations.git
   ```

2. Navigate to the project directory:

   ```
   cd vue-quasar-math-operations
   ```

3. Install project dependencies:

   ```
   npm install
   yarn install
   ```

4. Start the development server:

   ```
   quasar dev
   ```

The application should now be running on [http://localhost:8080](http://localhost:8080).

## Usage

1. Access the login page at [http://localhost:8080](http://localhost:8080) and log in using any credentials (authentication is not implemented in this demo).

2. After logging in, you will be redirected to the operations page where you can perform addition, subtraction, multiplication, and division.

3. To perform an operation, enter the numbers in the input fields and click on the respective operation button.

4. The result will be displayed in the "Result" section.
