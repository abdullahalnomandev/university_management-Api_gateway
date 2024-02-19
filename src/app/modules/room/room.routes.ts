import express from 'express';
import { RoomController } from './room.controller';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';

const router = express.Router();

router.get('/', RoomController.getAllFromDB);
router.post('/', validateRequest(RoomValidation.create), RoomController.insertIntoDB);

export const RoomRoutes = router;
