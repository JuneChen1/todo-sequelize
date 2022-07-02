# 待辦清單
![螢幕擷取畫面 2022-07-02 151115](https://user-images.githubusercontent.com/103798145/176990704-a391d7db-0f7e-4634-9226-f4f79b406b12.jpg)
## 功能說明
+ 使用 email 或 facebook 註冊帳號
+ 可新增、編輯與刪除代辦清單
## 安裝流程
1. 請確認有安裝 Node.js 與 npm
2. 將專案 clone 到本地
```
git clone https://github.com/JuneChen1/todo-sequelize.git
```
3. 安裝套件
```
npm install
```
4. 安裝nodemon套件
```
npm install nodemon
```
5. 將 .env.example 檔名更改為 .env，並修改以下變數
```
FACEBOOK_ID = facebook 應用程式編號
FACEBOOK_SECRET = facebook 應用程式密鑰
```
6. 啟動伺服器
```
npm run dev
```
7. 當終端機出現以下訊息，代表伺服器已成功啟動
```
App is running on http://localhost:3000
```
9. 開啟瀏覽器輸入 http://localhost:3000
## 環境建置
+ Node.js 16.15.0
+ Express 4.17.1
+ Express-handlebars 4.0.4
+ Bootswatch 5
+ Mysql2 2.1.0
+ Sequelize 5.21.13
+ Sequelize-cli 5.5.1
+ Dotenv 16.0.1
+ Bcryptjs2.4.3
+ Connect-flash 0.1.1
+ Express-session 1.17.1
+ Method-override 3.0.0
+ Passport 0.4.1
+ Passport-local 1.0.0
+ Passport-facebook 3.0.0
+ Passport-facebook 3.0.0
