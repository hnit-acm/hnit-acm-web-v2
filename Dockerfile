FROM ranadeeppolavarapu/nginx-http3:latest

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

RUN ls && mv ./nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]
