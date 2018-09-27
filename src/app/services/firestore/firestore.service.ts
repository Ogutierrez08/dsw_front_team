import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  public createAbogado(data:{nombre:string,url:string}){
    return this.firestore.collection('abogados').add(data);
  
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
