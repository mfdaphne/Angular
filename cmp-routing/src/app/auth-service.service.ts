export class AuthService {
    canLogin = false;

    isAutheniticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.canLogin);
                }, 500);
            }
        );
        return promise;
    }

    login() {
        this.canLogin = true;
    }

    logout() {
        this.canLogin = false;
    }
}