export interface AuthResponse {
    body: {
        name: string;
        access_token: string;
        refresh_token: string;
        token_type: string;
    };
}

export interface AuthResponseError {
    body: {
       detail: string;
    };
}