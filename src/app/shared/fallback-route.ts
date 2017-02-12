import { Route } from '@angular/router';
export const fallbackRoute:Route ={ path: '**', redirectTo:"layout", pathMatch:"full" };
