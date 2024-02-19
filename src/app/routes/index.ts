import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { BuildingRouters } from '../modules/building/building.routes';
import { RoomRoutes } from '../modules/room/room.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRouters
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
