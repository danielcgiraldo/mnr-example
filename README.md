# FullStack Project Example
This project uses [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) as the main language and it is powered by the following frameworks:

- [React](https://reactjs.org/docs/getting-started.html)
- [Next.js v13 (Beta)](https://beta.nextjs.org/docs/getting-started)

Please note that Next.js is under a Beta version, and no guarantee is provided. Additionally, other tools like [Sequelize](https://sequelize.org/docs/v6/getting-started/) with MySQL are used. You can check all of them and their versions in the package.json file.

When cloning this repository, don't forget to run ```npm install``` and ```npm run dev``` to check it in http://localhost:3000.

## Project Structure

For next.js beta, the folder for all our routes (excluding apis) is going to be the ```app``` folder. Inside this folder, we are developed some fundamentals:

- /blog - This folder contains an example of [Dynamic Segments](https://beta.nextjs.org/docs/routing/defining-routes#dynamic-segments).