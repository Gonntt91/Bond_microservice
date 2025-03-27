

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

