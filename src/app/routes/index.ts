import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { BuildingRouters } from '../modules/building/building.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';

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
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-courses-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/offered-courses-sections',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: StudentEnrolledCourseRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
