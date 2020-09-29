import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { untilDestroyed } from "ngx-take-until-destroy";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  public employees = [];

  constructor(protected http: HttpClient) {}

  async ngOnInit() {
    this.getlistData();
  }

  private getlistData(size = 10, offset = 1): void {
    this.http
      .post("hcm/payroll/queries/employeeListQuery", {
        page: { current: offset, size: size },
      })
      .pipe(
        map((res: any) => res && res.result),
        untilDestroyed(this)
      )
      .subscribe((payload: any) => {
        this.employees = payload.employees;
      });
  }

  ngOnDestroy() {}
}
