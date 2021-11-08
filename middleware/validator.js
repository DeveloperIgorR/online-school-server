const { body } = require("express-validator");

class Validator {
  validateLogin(request) {    
    return [
      body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Логин должен быть e-mail"),
      body("password")
       .isLength({ min: 3})
        // .isStrongPassword({
        //   minLength: 3,
        // //   minLowercase: 1,
        //   // minNumbers: 1,
        // //   minUppercase: 1,
        // //   minSymbols: 1,
        // })
        .withMessage(
          "Пароль должен содержать минимум 3 символа"
        ),
    ];
  }
  validateSocialNetwork(requers) {
    return [
      body("Instagram")
        .isLength({ min: 2, max: 16 })
        .matches(
          /@(?=.{5,64}(?:\s|$))(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_.])/gm
        )
        .withMessage("Введите корректный профиль Instagram, начинающийся с @"),
      body("Telegram")
        .isLength({ min: 2, max: 16 })
        .matches(
          /@(?=.{5,64}(?:\s|$))(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_.])/gm
        )
        .withMessage("Введите корректный профиль Telegram, начинающийся с @"),
    ];
  }
}

module.exports = new Validator();