# 使用 node 20 作為基本映像
FROM node:20

# 安裝必要的依賴項並設置時區
RUN apt-get update && \
    apt-get install -y \
        xvfb \
        libgtk-3-0 \
        libnotify-dev \
        libgconf-2-4 \
        libnss3 \
        libxss1 \
        libasound2 \
        libxtst6 \
        xauth \
        libgbm-dev \
        libatk1.0-0 && \
    ln -fs /usr/share/zoneinfo/Asia/Taipei /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

# 設置工作目錄
WORKDIR /app

RUN apt-get update && apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# 複製項目文件到工作目錄
COPY . .

# 複製整個 assets 目錄到容器中的 /app/assets
COPY ./report/assets /app/assets

# 安裝依賴項
COPY package*.json ./
RUN npm install && npx cypress install --force

# 創建存放 Cypress 測試結果的目錄
RUN mkdir -p /app/cypress/results

# 安裝 mochawesome-merge
RUN npm install -g mochawesome-merge

# 執行 Cypress 測試
CMD npx cypress run && \
    node newSortsonByDate.js && \
    npx marge "mochawesome.json" -f report -o report