import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import IdTokenPostDto from '../models/IdTokenDto';
import { IdTokenGetDto } from '../models/IdTokenDto';
import { IdToken } from '@auth0/auth0-spa-js';
import {Promise} from 'es6-promise'; 
import { User } from '../models/User';

export const mapper = createMapper({
  name: 'someName',
  pluginInitializer: classes,
});


export function mapToIdToken(currentUser: User, platformId: number|null, userPlatformId:number|null, userToken: IdToken): IdTokenPostDto
{
  const dto = new IdTokenPostDto();

  //from local variables
  dto.userId= currentUser.userId; 
  dto.platformId=platformId; 
  dto.platformUserId=userPlatformId

  //from returned IdToken
  if(userToken.nickname)
  dto.nickname=userToken.nickname; 
  if(userToken.exp)
  dto.exp= userToken.exp; 
  if(userToken.iat)
  dto.iat= userToken.iat; 

  return dto;
}