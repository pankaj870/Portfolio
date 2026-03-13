# pankaj mahajan portfolio website

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Docker Deployment

Build the Docker image:
```bash
docker build -t portfolio .
```

Run the container:
```bash
docker run -d -p 8080:80 portfolio
```

Open http://localhost:8080 to view your portfolio.
