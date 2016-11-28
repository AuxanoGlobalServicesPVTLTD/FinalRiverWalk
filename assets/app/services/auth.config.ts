interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'peMVaudyOycBSvwnIhA7bSrgeMKkkteR',
    domain: 'wunoinc.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:4200/overview/'
};