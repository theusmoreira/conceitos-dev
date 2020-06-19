import { Request, Response } from 'express';
import createUser from './services/CreateUser';

function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Matheus Santos',
    email: 'matheus@mathues.com',
    password: '123456',
    techs: [
      'Nodejs',
      'React Native',
      'ReactJS',
      { title: 'JavasScript', experience: 100 },
      { title: 'Nodejs', experience: 100 }
    ]
  });
  console.log(user.email);
  return response.json({message: 'Hello World'});
}

export default helloWorld;