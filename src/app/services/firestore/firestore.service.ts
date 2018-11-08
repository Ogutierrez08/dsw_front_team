import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {AbogadosInterface} from 'src/app/models/abogados'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  abogadosColecction: AngularFirestoreCollection<AbogadosInterface>

  constructor(private firestore: AngularFirestore) { 
  this.abogadosColecction = firestore.collection<AbogadosInterface>('abogados');
  }

  public createAbogado(abogado:AbogadosInterface, onSuccess:Function){
    this.abogadosColecction.add(abogado)
      .then((value) => {
        console.log('value', value)

        onSuccess()
      })
  }

  public getAbogado(documentId: string) {
    return this.firestore.collection('abogados').doc(documentId).snapshotChanges();
  }

  public getAbogados() {
    return this.firestore.collection('abogados').snapshotChanges();
  }
  
  public updateAbogado(documentId: string, data: any) {
    return this.firestore.collection('abogados').doc(documentId).set(data);
  }

}
