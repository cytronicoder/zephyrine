# Contributing to the project

Contributions are welcome, and they are greatly appreciated! Every little bit helps, and credit will always be given. However, there are a few guidelines that we need contributors to follow to keep everything tidy.

## Getting started

Before you start working on a new feature or a bug fix, please create an issue to discuss it. This will help us to make sure that you are on the right track. If you are not sure if a feature is something that we want, feel free to create an issue and ask us.

## How to contribute

Once you have created an issue, you can start working on it. If you are not sure how to do something, feel free to ask us. We are happy to help!

Before you get started, make sure that you have [Node.js and `npm`](https://nodejs.org/en/) installed on your computer. You can verify if they are installed by running `node -v` and `npm -v`.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. [Enable pnpm via Corepack](https://pnpm.io/installation#using-corepack) if you are using at least Node.js v16.13:

    ```bash
    corepack prepare pnpm@7.19.0 --activate
    # or
    corepack prepare pnpm@latest --activate # only >= v16.17
    ```

4. Install the dependencies:

    ```bash
    pnpm install
    ```

5. Create a branch for local development:

    ```bash
    git checkout -b name-of-your-bugfix-or-feature
    ```

6. Make your changes to the codebase
7. Make sure that your changes are linted properly:

    ```bash
    pnpm lint
    ```

8. Commit your changes and push your branch to GitHub:

    ```bash
    git add .
    git commit -m "Your detailed description of your changes."
    git push origin name-of-your-bugfix-or-feature
    ```

9. Submit a pull request through the GitHub website
10. We will review your changes and merge them if everything is fine

Congratulations! You have successfully contributed to the project!
