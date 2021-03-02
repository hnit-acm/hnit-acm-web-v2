FROM nginx:latest

RUN pwd && mkdir /home/app && mv ./nginx.conf /etc/nginx/nginx.conf

COPY . /home/app

WORKDIR /home/app

ENTRYPOINT ["nginx","-g","daemon off;"]
