import { Router } from 'express';
import { RecipeController } from './Controllers/RecipeController';
import { UserController } from './Controllers/UserController';
const routes: any = Router();

const _recipeController:RecipeController = new RecipeController();
const _userController:UserController = new UserController();

routes.get('/users', _userController.index);
routes.get('/users/:id', _userController.show);
routes.post('/users', _userController.store);
routes.put('/users/:id', _userController.update);
routes.delete('/users/:id', _userController.delete);

routes.get('/recipes', _recipeController.index);
routes.get('/recipes/:id', _recipeController.show);
routes.post('/recipes', _recipeController.store);
routes.put('/recipes/:id', _recipeController.update);
routes.delete('/recipes/:id', _recipeController.delete);

export default routes;