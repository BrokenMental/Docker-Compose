FROM node:10

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

CMD ["node", "index.js"]

#1번 터미널 redis 실행
#docker run redis

#2번 터미널 docker-compose 실행
#실행 파일 빌드 : docker build -t {아이디/이미지 별칭} {파일 경로}
#docker 실행 시 에러, 여기서 활용하려는 redis 서버를 갖고있는 컨테이너를 찾지 못했기 때문, 다른 컨테이너를 경유하려면 docker-compose 활용

#docker-compose를 활용한 service 구성
#docker-compose 설정파일 생성 : docker-compose.yml(service 구성)
#docker compose 실행(docker-compose.yml이 존재하는 폴더에서 실행) : docker-compose up
#docker compose 시 build도 함께 실행 : docker-compose up --build

#docker compose 사용 시 터미널을 여러개로 구성해서 따로 서버를 실행하지 않아도 됨(이미 docker-compose.yml에서 서버 이미지를 구성했기 때문)
#따라서 여기선 1번 터미널이 필요가 없음