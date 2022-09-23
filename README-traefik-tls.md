# Traefik Reverse Proxy on localhost with TLS
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

> I provide an image including the tls certificates at    https://github.com/avogt-sundn/traefik-with-localhost-tls
> . You will still have to configure tls in your docker-compose file, like here.

## Edge proxy for Docker Desktop
The Docker Compose file will create a reverse proxy with routing capabilities!

* the [docker-compose file](docker-compose.yaml) is included in this project 

Results:
* all containers get a dedicated hostname in a shared DNS domain
* that domain can be resolved locally
* port 80 redirects to port 443
* port 443 servers TLS with a valid certificate from https://localhost.direct 

Usage:

1. Open http://localhost:8080
    * the [Traefik dashboard](https://doc.traefik.io/traefik/operations/dashboard/) will open
    * all routes that were discovered show up --> http://localhost:8080/dashboard/#/http/routers

2. Open one of the container`s routes
    * http://pgadmin.localhost.direct 
        * the browser will be redirected to https://pgadmin.localhost.direct 
        * the tls certificate shows up left to the browser address bar as being valid (with a non-red/non-broken <i class='fas fa-lock'> </i> lock symbol

and also then:

3. Open one of the container`s routes
    * https://pgadmin.localhost.direct 
      * the tls certificate shows up left to the browser address bar as being valid (with a non-red/non-broken <i class='fas fa-lock'> </i> lock symbol

