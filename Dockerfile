# 使用 node 20 作為基本映像
FROM node:20

# 安裝必要的依賴項
RUN apk add --no-cache \
  xvfb libgtk3 libnotify-dev libgconf2 libnss3 \
  libxss1 libasound2 libxtst xauth libgbm libatk1.0-dev

# 設置工作目錄
WORKDIR /app

# 複製項目文件到工作目錄
# COPY . /app
COPY . .

# 複製整個 assets 目錄到容器中的 /app/assets
COPY ./report/assets /app/assets

# # 安裝 Cypress 和相關依賴
# RUN npm install
# RUN npx cypress install --force

# 安裝依賴項
COPY package*.json ./
RUN npm install --verbose && npx cypress install --verbose


# 清除緩存 
RUN npm cache clean --force && docker builder prune
# # 創建存放 Cypress 測試結果的目錄
# RUN mkdir -p /app/cypress/results/.jsons

# 創建存放 Cypress 測試結果的目錄
RUN mkdir -p /app/cypress/results

# # 複製報告檔案到容器中的目錄
# COPY cypress/results/.jsons /app/cypress/results/.jsons

# 安裝 mochawesome-merge
RUN npm install -g mochawesome-merge

# 執行 Cypress 測試
CMD npx cypress run && node newSortsonByDate.js && npx marge "mochawesome.json" -f report -o report
