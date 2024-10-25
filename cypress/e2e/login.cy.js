describe('Автотесты для формы логина и пароля', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввелверный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал на кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку "забыли пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввёл почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажимаю отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Нашёл поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Нашёл поле пароль и ввели неверный пароль
        cy.get('#loginButton').click(); // Нашёл кнопку Войти и нажали на неё

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Нашёл поле логин и ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашёл поле пароль и ввел верный пароль
        cy.get('#loginButton').click(); // Нашёл кнопку Войти и нажал на неё

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


    })

    it('Проверка, что в логине есть собачка', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нашёл кнопку Войти и нажали на неё

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввелверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал на кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст есть и виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю


    })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/login.cy.js --browser chrome
 
