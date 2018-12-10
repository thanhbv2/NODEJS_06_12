# Khởi tạo dự án Node Js bằng express JS
### Hướng dẫn đọc ghi file bằng module fs
### Hướng dẫn Rest API GET, POST với JSON file 
### Public libs 
* Tạo package.json trong libs cần public => npm init or npm init --scope=@my-utils   
```js
{
  "name": "@vanthanhgt89/my-utils",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "vanthanhgt89@gmail.com",
  "license": "MIT"
}
```
* Login tài khoản npm, verify email đăng 
```js
npm login
npm publish --access=public
```

* npm install @vanthanhgt89/event_listener
> "@vanthanhgt89/event_listener": "^1.0.0",

* Khi cần chỉ đề file local
>   VD: "event_listener": "file:/libs/eventListener",
