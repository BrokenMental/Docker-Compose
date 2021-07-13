#node에는 npm 모듈이 포함되어 있어서 아래 npm install 사용 가능
FROM node:10

#작업공간을 따로 설정해 루트부터 접근하는게 아닌 아래 설정한 작업공간부터 접근
#usr/src 아래에 app이라는 폴더가 없을 경우 생성 후 해당 폴더를 작업공간으로 설정
#어플리케이션(앱 또는 프로그램)과 관련된 프로그램이 해당 폴더에 설정
WORKDIR /usr/src/app

#컨테이너에 파일을 직접 넣어줘야 하기 때문에 복사해줌({넣을 파일} {넣을 위치}), 여기선 전체 파일을 복사
#COPY ./ ./

#기존 : COPY ./ ./ => RUN npm install
#변경 : COPY package.json ./ => RUN npm install => COPY ./ ./
#기존 방식은 해당 경로에 변경이 생길 경우 무조건 npm install을 실행해야 했지만,
#변경된 방식은 packgae.json이 변경됐는지 확인 후 변경점이 있으면 npm install을 실행
#기존 설정과 차이점이 없을 경우 cache 되어 있는 설정을 사용하기 때문에 변경 방식이 속도가 더 빠름

RUN npm install

COPY ./ ./

CMD ["node", "server.js"]

#docker build -t(실행 파일에 별칭 붙일 때 사용) {아이디/이미지 별칭} {경로}
#docker run -d -p {브라우저 연결 포트}:{컨테이너에 연결된 내부 포트} {아이디/이미지 별칭}
#-d 옵션으로 실행했을 경우 컨테이너 접속 시 : docker exec {이미지 PID}

#docker run -it {아이디/이미지 별칭} {명령어}
#명령어, sh : 쉘로 접속

#Docker Volume을 활용하여 build 없이 코드 변경 가능(서버는 껐다 켜야함, 기존에는 코드 변경 시 새롭게 빌드 후 실행의 과정을 거쳤어야 함)
#Docker Volume 이용 시 기존에 생성된 ID는 변경되지 않음
#Docker run -d -p {브라우저 연결 포트}:{컨테이너에 연결된 내부 포트} -v {작업공간 경로}/node_modules -v $(pwd):{작업공간 경로} {아이디/이미지 별칭}
#Docker restart {컨테이너 ID} 로 적용 가능