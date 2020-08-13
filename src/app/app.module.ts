import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailsStudentComponent } from './components/student/details-student/details-student.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { SearchEmployeeComponent } from './components/employee/search-employee/search-employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { DetailsEmployeeComponent } from './components/employee/details-employee/details-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';

import { LikeDislikeComponent } from './like-dislike/like-dislike.component'; //importing the module
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { SearchLevelComponent } from './components/level/search-level/search-level.component';
import { AddLevelComponent } from './components/level/add-level/add-level.component';
import { ListTeacherComponent } from './components/teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './components/teacher/add-teacher/add-teacher.component';
import { DetailsTeacherComponent } from './components/teacher/details-teacher/details-teacher.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { AddGradeComponent } from './components/grade/add-grade/add-grade.component';
import { AddSubjectComponent } from './components/Subject/add-subject/add-subject.component';
import { ListSubjectComponent } from './components/Subject/list-subject/list-subject.component';
import { SearchSubjectComponent } from './components/Subject/search-subject/search-subject.component';
import { TestComponent } from './test/test.component';
import { SearchByAgeComponent } from './components/teacher/search-by-age/search-by-age.component';
import { SearchByNameComponent } from './components/teacher/search-by-name/search-by-name.component';
import { SubjectsComponent } from './layout/subjects/subjects.component';
import { LevelsComponent } from './layout/levels/levels.component';
import { DetailsLevelComponent } from './components/level/details-level/details-level.component';
import { DetailsSubjectComponent } from './components/subject/details-subject/details-subject.component';
import { AddGuardianComponent } from './components/guardian/add-guardian/add-guardian.component';
import { LevelComponent } from './layout/level/level.component';
import { SearchStudentByNameComponent } from './components/student/search-student-by-name/search-student-by-name.component';
import { SearchStudentByAgeComponent } from './components/student/search-student-by-age/search-student-by-age.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    ListStudentComponent,
    AddStudentComponent,
    DetailsStudentComponent,
    ListEmployeeComponent,
    SearchEmployeeComponent,
    AddEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent,
    SearchLevelComponent,
    ListLevelComponent,
    LikeDislikeComponent,
    LevelsComponent,
    AddLevelComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    DetailsTeacherComponent,
    AddGradeComponent,
    AddSubjectComponent,
    SubjectsComponent,
    ListSubjectComponent,
    SearchSubjectComponent,
    TestComponent,
    SearchByAgeComponent,
    SearchByNameComponent,
    DetailsLevelComponent,
    DetailsSubjectComponent,
    AddGuardianComponent,
    LevelComponent,
    SearchStudentByNameComponent,
    SearchStudentByAgeComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    CKEditorModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient){

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
