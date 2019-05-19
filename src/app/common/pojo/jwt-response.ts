import { Injectable } from "@angular/core";



@Injectable()

export class JwtResponse {
    id: number;
    role: string;
    name: string ;
    email: string;
    username: string;
    token: string;
  }