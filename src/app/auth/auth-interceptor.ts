import { Injectable } from "@angular/core";
import { optimizeGroupPlayer } from "@angular/animations/browser/src/render/shared";
import { HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS, HttpRequest } from "@angular/common/http";
import { TokenStorageService } from "./token-storage.service";

const TOKEN_HEADER_KEY = "Authorization";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authreq = req;
        const token = this.token.getToken();
        if (token != null) {
            authreq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) })
        }
        return next.handle(authreq);
    }
}

export const HttpInterceptorProviders =  [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];