```
docker build -t cctestimage .
docker run --rm -p 8080:8080 --name cctestcontainer cctestimage
```
