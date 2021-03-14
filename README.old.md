# goit-react-hw-08-registration-and-login

1. npx create-react-app . --use-npm
2. npm i prop-types
3. линтинг npm install --save-dev prettier husky lint-staged
4. Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл;
   codeActionsOnSave - all)
5. Добавляем настройки в
   проект(https://github.com/goitacademy/react-lint-config)
6. настраиваем абсолютные импорты
   (https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
   (создаем файл jsconfig.json,вставляем... после чего можно писать import
   Button from 'components/Button'; без ../../../)
7. Ставим пакет [https://reactrouter.com/core/guides/quick-start] - (npm install
   react-router-dom)
8. Анимированная стилизация npm install react-transition-group
9. Redux - npm i redux
10. React-redux - npm i react-redux
11. Redux DevTools (http://extension.remotedev.io/) - npm install --save-dev
    redux-devtools-extension
12. В файл с редьюсером import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension'; const store
    = createStore(reducer, composeWithDevTools());
13. npm install @reduxjs/toolkit
14. npm install json-server
15. npm i axios

16. npx create-react-app . --use-npm
17. npm i prop-types
18. линтинг npm install --save-dev prettier husky lint-staged
19. Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл;
    codeActionsOnSave - all)
20. Добавляем настройки в
    проект(https://github.com/goitacademy/react-lint-config)
21. настраиваем абсолютные импорты
    (https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
    (создаем файл jsconfig.json,вставляем... после чего можно писать import
    Button from 'components/Button'; без ../../../)
22. Ставим пакет [https://reactrouter.com/core/guides/quick-start] - (npm
    install react-router-dom)
23. Анимированная стилизация npm install react-transition-group
24. Redux - npm i redux
25. React-redux - npm i react-redux
26. Redux DevTools (http://extension.remotedev.io/) - npm install --save-dev
    redux-devtools-extension
27. В файл с редьюсером import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension'; const store
    = createStore(reducer, composeWithDevTools());
28. npm install @reduxjs/toolkit
29. npm i axios
30. npm i classnames
31. npm i redux-logger
32. npm i redux-persist

---

16. deploy on netlify
17. В корне создать файл netlify.toml - ( [build] publish = "build"

    [[redirects]] from = "/" to = "/index.html" status = 200)

18. npm install netlify-cli -g
19. netlify login
20. Authorized
21. package.json ("predeploy": "npm run build", "deploy": "netlify deploy -p")
22. npm run deploy
23. Create (enter), enter, name project
24. netlify open --site

---

18. deploy on gh-pages
19. npm run build
20. "homepage": "https://myusername.github.io/my-app",
21. npm run build
22. npm install --save gh-pages
23. "predeploy": "npm run build", "deploy": "gh-pages -d build",
24. npm run deploy

---

25. 0.01 Backend for phonebook, delete db.json
26. 0.02 Смотрим структуру компонентов в проекте
27. 0.06 Разбираем структуру redux-файлов для auth
28. Регистрируем пользователя
29. 0.17 Получили токен и обрабатываем редьюсер
30. 0.20 Дополняем store.js
31. 0.26 Решаем ошибку
32. 0.30 Логиним пользователя
33. 0.47 Логаут пользователя
34. 0.57 Рефреш залогиненого пользователя, todos

35. Вебинар 14
36. 0.02 Приватные маршруты PrivateRoute
37. 0.14 PublicRoute
38. 0.24 Рефшреш пользователя. Тудушки моунтятся раньше чем юзерский токен
39. 0.40 Разделение кода (Suspense, lazy)
40. 0.50 CreateAsyncThunk
