import express from 'express';
import { BuildingController } from './building.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingValidation } from './building.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(BuildingValidation.create),
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.insertIntoDB
);
router.get('/', BuildingController.getAllFromDB);

export const BuildingRouters = router;
