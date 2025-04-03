

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# not pull again image (not update latest version), just use cached image
$ docker compose up --no-build

```

## Access mongodb in docker
```
docker exec -it adoraz-mongo-1 bash
mongosh AZ-account
```

## Debug mode:
```bash
in file docker-compose.yaml change to this line  
command: pnpm run start:debug reservations 

start:dev --> start:debug
```

## Just log 1 service
```bash
docker logs -f <container-name>
docker logs -f adoraz-auth-1

 # -f means follow
```