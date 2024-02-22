import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllFromDB);
router.post('/', OfferedCourseSectionController.insertIntoDB);
router.get('/:id', OfferedCourseSectionController.getOneFromDB);
router.delete('/:id', OfferedCourseSectionController.deleteOneFromDB);

export const OfferedCourseSectionRoutes = router;
