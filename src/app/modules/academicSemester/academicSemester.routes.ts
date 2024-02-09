import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validations';

const router = express.Router();



router.get('/:id',AcademicSemesterController.getOneFromDB)
router.post('/', 
validateRequest(AcademicSemesterValidation.create),
AcademicSemesterController.insertIntoDB)
router.get('/',AcademicSemesterController.getAllFromDB)
router.patch('/:id',AcademicSemesterController.updateOneIntoDB)
router.delete('/:id',AcademicSemesterController.deleteOneByID)

export const AcademicSemesterRoutes = router;