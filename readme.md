# Readme.md :octocat:

### Intro
#### Why Typescript/Javascript
Due to the nature of Unidays and its method of service delivery, I felt it would be more appropriate to use the language of the web - Javascript. However, due to the type-agnostic nature of Javascript, I felt like the language limited my ability to work efficiently while keeping the SOLID design principles in mind. Therefore, I decided to use Typescript as it offered more implicit static typing and allowed me to write with ES2017 code, while making it possible to run on older platforms by changing its `tsc` compilation target.

##### Dependancies
>This project requires the following libraries to run:
- typescript

>And one of the following libraries to run the unit tests:
- mocha
- nodeunit


### Usage

#### Github: To Use
To run this project from github, you'll need Git, and NodeJS (which comes packaged with npm) installed on your device. Once you have these pre-requisites, enter the following on your command line:

```bash
# clone repository
git clone https://github.com/daryl-cecile/UnidaysDiscountChallenge
# Go into the challenge repository
cd UnidaysDiscountChallenge
# Install dependencies
npm install
```

#### Archive: To Use

To run this project from the Zip archive, you'll need NodeJS (which comes with npm) installed on your computer. 
From your command line, navigate to the unzipped folder:
```bash
# Go to the folder, once unzipped
cd UnidaysDiscountChallenge
```

### Make changes to files, and run

You can open the `index.ts` file and make changes to the _pricing rules_ and _basket_ as per liking.

Once you are ready to run the script, simply call the following from your command line:
```bash
# Run the app
npm start
```

### To perform or view Test Cases result
To perform Test Cases unit tests on the script, simply call the following from your command line:
```bash
# Run the app
npm test
```