## Cấu hình MongoDB window
[mongodb dowload](https://www.mongodb.com/download-center/community)
### Vào thư mục chứa file cài đặt mongoDB
> cd "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
### Setup đường dẫn lưu data
> "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"



## Cấu hình MongoDB Mac
[mongodb dowload](https://www.mongodb.com/download-center/community)
### Setup đường dẫn 
> mongod --dbpath <path to data directory>
### Run mongo
> mongo
### shell mongo
[shell script] (https://docs.mongodb.com/manual/reference/mongo-shell/)

### deploy heroku
### Cài đặt heroku-cli [dowload](https://devcenter.heroku.com/articles/heroku-cli)
* Tạo project heroku create ten_project
* Tạo DB mongo: heroku addons:create mongolab:sandbox -a murmuring-escarpment-40481
* View log: heroku logs --tail --app murmuring-escarpment-40481