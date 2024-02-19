import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidations } from './offeredCourseValidation';

const router = express.Router();

router.get('/', OfferedCourseController.getAllFromDB);
router.get(
  '/:id',
  validateRequest(OfferedCourseValidations.create),
  OfferedCourseController.getByIdFromDB
);
router.post('/', OfferedCourseController.insertIntoDB);

export const OfferedCourseRoutes = router;
