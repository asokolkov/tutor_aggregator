using Microsoft.AspNetCore.Identity;

namespace SPA.Identity;

internal sealed class CustomIdentityErrorDescriber : IdentityErrorDescriber
{
    public override IdentityError DefaultError()
    {
        return new IdentityError
        {
            Code = nameof(DefaultError),
            Description = $"Произошла непредвиденная ошибка, попробуйте повторить операцию позже"
        };
    }

    public override IdentityError PasswordMismatch()
    {
        return new IdentityError
        {
            Code = nameof(PasswordMismatch),
            Description = $"Введен неверный пароль"
        };
    }

    public override IdentityError InvalidUserName(string userName)
    {
        return new IdentityError
        {
            Code = nameof(InvalidUserName),
            Description = $"Введено невалидное имя пользователя"
        };
    }

    public override IdentityError InvalidEmail(string email)
    {
        return new IdentityError
        {
            Code = nameof(InvalidEmail),
            Description = $"Введен невалидный фдрес электронной почты"
        };
    }

    public override IdentityError DuplicateUserName(string userName)
    {
        return new IdentityError
        {
            Code = nameof(DuplicateUserName),
            Description = $"Пользователь с именем `{userName}` уже существует"
        };
    }

    public override IdentityError DuplicateEmail(string email)
    {
        return new IdentityError
        {
            Code = nameof(DuplicateEmail),
            Description = $"Введеный адрес электронной почты уже используется"
        };
    }

    public override IdentityError PasswordTooShort(int length)
    {
        return new IdentityError
        {
            Code = nameof(PasswordTooShort),
            Description = $"Введенный пароль слишком короткий"
        };
    }

    public override IdentityError PasswordRequiresUniqueChars(int uniqueChars)
    {
        return new IdentityError
        {
            Code = nameof(PasswordRequiresUniqueChars),
            Description = $"Пароль должен содержать уникальные символы"
        };
    }

    public override IdentityError PasswordRequiresNonAlphanumeric()
    {
        return new IdentityError
        {
            Code = nameof(PasswordRequiresNonAlphanumeric),
            Description = $"Пароль должен содержать специальные символы"
        };
    }

    public override IdentityError PasswordRequiresDigit()
    {
        return new IdentityError
        {
            Code = nameof(PasswordRequiresUniqueChars),
            Description = $"Пароль должен содержать специальные символы"
        };
    }

    public override IdentityError PasswordRequiresLower()
    {
        return new IdentityError
        {
            Code = nameof(PasswordRequiresLower),
            Description = $"Пароль должен содержать символы нижнего регистра"
        };
    }

    public override IdentityError PasswordRequiresUpper()
    {
        return new IdentityError
        {
            Code = nameof(PasswordRequiresUpper),
            Description = $"Пароль должен содержать символы верхнего регистра"
        };
    }
}