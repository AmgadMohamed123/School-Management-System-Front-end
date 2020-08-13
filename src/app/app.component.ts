import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-languages';
     currentLang: string;
     selectedValue: string;
     constructor(public translate: TranslateService){

    this.currentLang = localStorage.getItem('currentLang');
    if (this.currentLang == 'ar'){
    document.getElementsByTagName('html')[0].setAttribute('lang', 'ar');
     document.getElementsByTagName('body')[0].setAttribute('dir', 'rtl');


      this.selectedValue = 'ar';
     }
     else if (this.currentLang == 'en'){
      document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
      document.getElementsByTagName('body')[0].setAttribute('dir', 'ltr');
      if(this.changeCurrentLang==null){
      document.getElementById('test').className="ml-auto";
      }

      this.selectedValue = 'en';
     }
    this.translate.use(this.currentLang);


   }

   
//change language
   changeCurrentLang(lang: string){
     if (lang == 'ar'){
      document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      document.getElementsByTagName('body')[0].setAttribute('dir', 'rtl');
      //document.getElementById('test').className="mr-auto";
      this.translate.use(lang);
      localStorage.setItem('currentLang', lang);
     }
     else if (lang == 'en'){
      document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      document.getElementsByTagName('body')[0].setAttribute('dir', 'ltr');
      // document.getElementsByClassName('login-form')[0].setAttribute('class', 'ml-auto');

      this.translate.use(lang);
      localStorage.setItem('currentLang', lang);

     }
     

   }
}
