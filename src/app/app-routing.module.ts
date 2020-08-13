import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailsStudentComponent } from './components/student/details-student/details-student.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { SearchEmployeeComponent } from './components/employee/search-employee/search-employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { DetailsEmployeeComponent } from './components/employee/details-employee/details-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { SearchLevelComponent } from './components/level/search-level/search-level.component';
import { AddLevelComponent } from './components/level/add-level/add-level.component';
import { ListTeacherComponent } from './components/teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './components/teacher/add-teacher/add-teacher.component';
import { DetailsTeacherComponent } from './components/teacher/details-teacher/details-teacher.component';
import { AddGradeComponent } from './components/grade/add-grade/add-grade.component';
import { ListSubjectComponent } from './components/Subject/list-subject/list-subject.component';
import { AddSubjectComponent } from './components/Subject/add-subject/add-subject.component';
import { SearchSubjectComponent } from './components/Subject/search-subject/search-subject.component';
import { TestComponent } from './test/test.component';
import { SearchByAgeComponent } from './components/teacher/search-by-age/search-by-age.component';
import { SearchByNameComponent } from './components/teacher/search-by-name/search-by-name.component';
import { LevelsComponent } from './layout/levels/levels.component';
import { DetailsLevelComponent } from './components/level/details-level/details-level.component';
import { DetailsSubjectComponent } from './components/subject/details-subject/details-subject.component';
import { LevelComponent } from './layout/level/level.component';
import { SearchStudentByNameComponent } from './components/student/search-student-by-name/search-student-by-name.component';
import { SearchStudentByAgeComponent } from './components/student/search-student-by-age/search-student-by-age.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},




  {path:'list-student',component:ListStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'details-student/:id',component:DetailsStudentComponent},
  {path:'search-student-by-name',component:SearchStudentByNameComponent},
  {path:'search-student-by-age',component:SearchStudentByAgeComponent},

  {path:'t',component:LevelComponent}


,
  {path:'list-teacher',component:ListTeacherComponent},
  {path:'add-teacher',component:AddTeacherComponent},
  {path:'add-teacher/:id',component:AddTeacherComponent},

  {path:'list-teacher',component:ListTeacherComponent},
  {path:'details-teacher/:id',component:DetailsTeacherComponent}, 
  {path:'search-by-name',component:SearchByNameComponent},
  {path:'search-by-age',component:SearchByAgeComponent}
,


  {path:'list-employee',component:ListEmployeeComponent},
  {path:'search-employee',component:SearchEmployeeComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'details-employee',component:DetailsEmployeeComponent},
  {path:'update-employee',component:UpdateEmployeeComponent},







  {path:'list-level',component:ListLevelComponent},
  {path:'add-level',component:AddLevelComponent},
  {path:'search-level',component:SearchLevelComponent},
  {path:'details-level',component:DetailsLevelComponent},


  {path:'add-grade',component:AddGradeComponent}
,


{path:'list-subject',component:ListSubjectComponent},
{path:'add-subject',component:AddSubjectComponent},
{path:'search-subject',component:SearchSubjectComponent},
{path:'details-subject',component:DetailsSubjectComponent}

,

{path:'levels',component:LevelsComponent},

{path:'test',component:TestComponent},

  {path:'like',component:LikeDislikeComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
