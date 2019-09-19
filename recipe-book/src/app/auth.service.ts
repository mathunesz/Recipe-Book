import { EventEmitter } from '@angular/core';

export class AuthService {
    private loggedIn = true;

    authenticationUpdated = new EventEmitter<boolean>();

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        );

        return promise;
    }

    login() {
        this.loggedIn = true;
        this.authenticationUpdated.emit(this.loggedIn);
    }

    logout() {
        this.loggedIn = false;
        this.authenticationUpdated.emit(this.loggedIn);
    }
}