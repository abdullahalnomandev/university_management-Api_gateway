import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post('/create-academic-faculty', AcademicFacultyController.insertIntoDB);
router.get('/', AcademicFacultyController.getAllFromDB);
router.get('/:id', AcademicFacultyController.getOneFromDB);


export const AcademicFacultyRoutes = router;
