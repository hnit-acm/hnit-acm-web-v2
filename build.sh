npm run build
cp nginx.conf ./dist/
cp h3.nginx.conf ./dist/
cp hfunc.nekilc.cn.key ./dist/
cp hfunc.nekilc.cn.pem ./dist/
cp Dockerfile ./dist/
ls .
cd dist/
docker buildx build -f Dockerfile -t hfunc/web:qa .
docker push hfunc/web:qa