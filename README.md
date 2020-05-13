### Introduction to Typescript

#### What is Typescript

- Typescript is a programming language, it is a superset of Javascript that provides optional static typing for your code.
- It is an open source object oriented programming language by Microsoft.
- It has been public since 2012!
- Check out the codebase [here](https://github.com/microsoft/TypeScript).

#### Why Typescript

##### Static Typing

It offers interfaces and types for data as you define it.

##### Compilation

Typescript shows errors at compile time so you will rarely have any errors at runtime.
Javascript code you often view your errors first at runtime.
This makes your programming process clean and simple.
Run `tsc -- init` to create a `tsconfig.json` file and specify compiler options
Run `tsc -p tsconfig.json` to use the config file when compiling.

##### Scalability

Typescript code is easier to scale.
At a design level, you’ll need to have designed types & interfaces early on.

##### Schema-less DBs/ No-SQL

When using firebase/Mongo where your schemas are fluid, you can use TS to enforce types to your DB on the codebase level.

#### Easy Onboarding

When joining a new team, you can understand the codebase relationships and scope better when it’s in TS.

#### Installation

`npm install typescript -g`

`npm install @types/node -g`

#### Development

Run `tsc -- init` to create a `tsconfig.json` file and specify compiler options

Run `tsc -p tsconfig.json` to use the config file when compiling.

#### Common Errors

`Cannot redeclare block-scoped variable <>`

- This is actually a feature in TS which is about transpiled Typescript code. A similar .js file is created which means your objects are now available twice. This results in this error in your ts files.

`How to solve for it`

- Modularise by adding export {}
- Create a config file with your compiler options

##### Review slides [here](https://docs.google.com/presentation/d/1Pej5dfqhYdrOwY8zK1ixqL3z0OXXACY3K1ZvZ-hZurA/edit?usp=sharing)
