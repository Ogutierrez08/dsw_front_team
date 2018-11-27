import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent implements OnInit {

  public demanda = []

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getDemanda().subscribe((demandaSnapShot)=>{
      this.demanda = [];
      demandaSnapShot.forEach((demandaData:any)=>{
        this.demanda.push({
          id: demandaData.payload.doc.id,
          data: demandaData.payload.doc.data()
        });
      });
    });
  }

}
