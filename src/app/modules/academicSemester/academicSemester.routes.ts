import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();



router.get('/:id',AcademicSemesterController.getOneFromDB)
router.post('/', AcademicSemesterController.insertIntoDB)
router.get('/',AcademicSemesterController.getAllFromDB)
router.patch('/:id',AcademicSemesterController.updateOneIntoDB)

export const AcademicSemesterRoutes = router;