## Table of contents

- [General info](#general-info)
- [Setup](#setup)

## General info

A simple very tiny nodejs cli - helps you to user input from cli and do anything you would like with it.

## Setup

To run this project, install it locally using npm:

```
$ npm install very-little-cmd
$ var vlc = require('very-little-cmd');
```

It takes two arguments
1- Anything you would like to show user before getting input
2- A callback function for whatever you want to do with that input user gave you

```
$ vlc.ask('how old are you?',(age)=>{
    console.log(age);
})

this will result into printing age of the user.
```
