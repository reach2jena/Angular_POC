import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     import('mfe1/feature.module').then((m) => {
  //       return m.MfefeatureModule;
  //     }),
  // },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('mfe2/customer.feature.module').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule(
      {
        type: 'module',
        remoteEntry: "http://localhost:5000/mfe1remoteEntry.js",
        exposedModule: 'feature.module'
      }
    ).then((m) =>  {return m.MfefeatureModule})

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
