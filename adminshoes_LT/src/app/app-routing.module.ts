import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

// import {FlashMessagesModule} from 'angular2-flash-messages';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableKhachhangComponent } from './components/table-khachhang/table-khachhang.component';
import { TableSanphamComponent } from './components/table-sanpham/table-sanpham.component';
import { TableNhanvienComponent } from './components/table-nhanvien/table-nhanvien.component';
import { TableKhoComponent } from './components/table-kho/table-kho.component';
import { TableHoadonComponent } from './components/table-hoadon/table-hoadon.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ChatComponent } from './components/chat/chat.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormuserComponent } from './components/formuser/formuser.component';
import { FormproductComponent } from './components/formproduct/formproduct.component';
import { FormcustomerComponent } from './components/formcustomer/formcustomer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddNhanvienComponent } from './components/add-nhanvien/add-nhanvien.component';
import { EditNhanvienComponent } from './components/edit-nhanvien/edit-nhanvien.component';

import { AuthGuard } from './auth/auth.guard';

// Khai báo Router
const appRoutes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'login', component:LoginComponent },
  // { path: '**', redirectTo: ''},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'table-sanpham', component: TableSanphamComponent },
  { path: 'table-nhanvien', component: TableNhanvienComponent },
  { path: 'table-kho', component: TableKhoComponent },
  { path: 'table-khachhang', component: TableKhachhangComponent },
  { path: 'table-hoadon', component: TableHoadonComponent },
  { path: 'form-product', component: FormproductComponent },
  { path: 'form-user', component: FormuserComponent },
  { path: 'form-customer', component: FormcustomerComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: 'user-profile', component: UserprofileComponent },
  { path: 'Marketing', component: TaskboardComponent }

];
// import Routers
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
