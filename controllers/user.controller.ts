import { BodyRequestCreateUser, Post, PostResponse, RequestLoginUser, ResponseCreateUser, ResponseLoginUser } from "../models/user.models";
export class UserController{

    private domain: string;

    constructor(private urlApi:string){
        this.domain = urlApi;
    }

    async createUser(user: BodyRequestCreateUser): Promise<any> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        };
        const url = this.domain + '/users/register';
        const result: Response = await fetch(url, reqOptions);

        if (!result.ok) {
            const errorBody = await result.json();
            console.log(`Response body: ${errorBody}`);
            throw new Error("Register user failed");
        }

        const responseBodyCreate: ResponseCreateUser = await result.json();
        return responseBodyCreate;
    }

    async login(data: RequestLoginUser): Promise<ResponseLoginUser> {
        const endPointLogin: string = '/auth/login'
        const headers: Record<string,string> = {
            'Content-Type':'application/json'
        }
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
        const url = this.urlApi + endPointLogin
        const result: Response = await fetch(url, reqOptions)
    
        if(result.status !== 201){
            const errorBody = await result.json()
            console.log(`Response body: ${errorBody.message}`)
            throw new Error("User or password incorrect")
        }
        
        const responseBodyLogin: ResponseLoginUser = await result.json()
        return responseBodyLogin
    }

        async getPost(): Promise<PostResponse> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }
        const url = this.domain + '/posts';
        const result: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${result.status}`);
        if (result.status !== 200) {
            console.log(`Response body: ${(await result.json()).message}`);
            throw new Error('Failed to get books');
        }
        const responseBodyBooks: any = await result.json();
        console.log('Books fetched successfully');
        return responseBodyBooks;
    }

        async createBook(post: Post ): Promise<void> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(post)
        }
        const url = this.domain + '/api/v1/books';
        const result: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${result.status}`);
        if (result.status !== 200) {
            console.log(`Response body: ${(await result.json()).message}`);
            throw new Error('Failed to create book');
        }
        console.log('Book created successfully');
    }

}

export function showPreloader(){
    const preloader = document.getElementById('preloader')
    if (preloader){
        preloader.style.display = 'flex';
    }
}

export function hidePreloader(){
    const preloader = document.getElementById('preloader')
    if (preloader){
        preloader.style.display = 'none';
    }
}
