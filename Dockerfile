# 使用 node 18 作為基本映像
FROM node:18

# 安裝必要的依賴項
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
    libatk1.0-0

# 設置時區為台灣時區
RUN ln -fs /usr/share/zoneinfo/Asia/Taipei /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

# 設置工作目錄
WORKDIR /app

# 複製項目文件到工作目錄
COPY . /app

# 確認目錄存在並顯示其內容
RUN ls -la /app/cypress/results

RUN mkdir -p /app/cypress/results/.jsons

# 複製報告檔案到容器中的目錄
COPY cypress/results/.jsons /app/cypress/results/.jsons

# 安裝 Cypress
RUN npx cypress install

# 安裝 mochawesome-merge
RUN npx mochawesome-merge

# 驗證 Cypress 安裝
RUN npx cypress verify

# 執行 Cypress 測試
CMD npx cypress run && node newSortsonByDate.js && npx marge "mochawesome.json" -f report -o report


