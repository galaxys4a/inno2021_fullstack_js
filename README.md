# Hello World-приложение на React'e, собираемое с помощью Webpack'а.

## Установка зависимостей
```shell
npm install
```

## Запуск проекта (в режиме development, осуществляется автоматический запуск браузера, порт сервера - 5501):
```
npm start
```

При необходимости можно изменить значения порта в конфигурационном файле **webpack.config.js**:
```
module.exports = {
  //...
  devServer: {
    //...
    port: НОМЕР_ПОРТА,
  },
};
```