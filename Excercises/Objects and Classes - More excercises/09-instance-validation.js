class CheckingAccount {
    #clientId;
    #email;
    #firstName;
    #lastName;
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        if (typeof (clientId) !== 'string' || !Number(clientId) || clientId.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this.#clientId = clientId;
    }

    set email(email) {
        if (email.match(/^[a-zA-Z]+\@+[a-zA-Z\W*\w*]+$/) === null) {
            throw new TypeError('Invalid e-mail');
        }

        this.#email = email;
    }

    set firstName(firstName) {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (firstName.match(/^\w+$/) === null) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this.#firstName = firstName;
    }

    set lastName(lastName) {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (lastName.match(/^\w+$/) === null) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this.#lastName = lastName;
    }
}