import { Injectable } from "@angular/core";


@Injectable()
export class Defect {
    defect_id: number;
    defect_title: string;
    defect_status: string ;
    detected_by: string;
    detected_date: string;
    comments: string;
  }