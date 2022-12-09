import { Router } from 'express';
import { RecipeController } from './Controllers/RecipeController';
import { UserController } from './Controllers/UserController';
import { StepController } from './Controllers/StepController';
import { IngredientController } from './Controllers/IngredientController';
const routes: any = Router();

const _recipeController:RecipeController = new RecipeController();
const _userController:UserController = new UserController();
const _stepController:StepController = new StepController();
const _ingredientController:IngredientController = new IngredientController();

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

routes.get('/recipes/:id/steps', _stepController.index);
routes.get('/recipes/:recipeId/steps/:stepId', _stepController.show);
routes.post('/recipes/:id/steps', _stepController.store);
routes.delete('/recipes/:recipeId/steps/:stepId', _stepController.delete);
 
routes.get('/recipes/:id/ingredients', _ingredientController.index);
routes.get('/recipes/:recipeId/ingredients/:ingredientId', _ingredientController.show);
routes.post('/recipes/:id/ingredients', _ingredientController.store);
routes.delete('/recipes/:recipeId/ingredients/:ingredientId', _ingredientController.delete); 


export default routes;