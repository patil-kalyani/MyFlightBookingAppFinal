import { HttpClient } from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';


@Injectable()
export class AuthService {
    private _registerUrl = "http://localhost:17953/api/Login/register";
    private _loginUrl = "http://localhost:17953/api/Login/login"

    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(user: any) {
        return this.http.post<any>(this._loginUrl, user)
    }

    registerUser(user: UserData) {
        
        return this.http.post<any>(this._registerUrl, user)
    }

    logoutUser() {
        localStorage.removeItem('token')
        this._router.navigate(['/login'])
    }

    getToken() {
        return localStorage.getItem('token')
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
}