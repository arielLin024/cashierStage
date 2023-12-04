# 使用官方的 Node.js 鏡像作為基礎
FROM node:14

# 創建工作目錄
WORKDIR /app

# 安裝必要的依賴
COPY package.json package-lock.json /app/
RUN npm install

# 複製 Cypress 測試代碼
COPY cypress /app/cypress

# 啟動 Cypress 測試
CMD ["npm", "run", "cypress:run"]
