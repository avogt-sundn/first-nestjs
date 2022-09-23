* Install Nodejs, either by using a devcontainer in VS code 

* Install NestJS CLI

    ````
    npm i -g @nestjs/cli
    ````

* Created this project with the nestjs scaffoling command like this:
    ````
    nest new project-name
    ````

* Add dependencies (we are using npm as package manager):
    ````
    npm -i --save kafkajs
    npm -i --save @nestjs/microservices
    ````


Testing
````
curl --location --request GET 'http://localhost:3000/kafka-test'
````

