import IdTokenDto from './IdTokenDto';

export class User{
    userId: number =0;
    discordTokenId: number= 0;
    githubTokenId: number=0; 
    projectId: number=0; 
    appNickname: string="";  
    idTokens: IdTokenDto[]= [];
    password: string = "";
}