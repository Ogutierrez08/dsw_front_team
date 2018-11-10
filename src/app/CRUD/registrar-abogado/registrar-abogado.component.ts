
import { Component, OnInit } from '@angular/core';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage'
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'
import { AbogadosInterface } from 'src/app/models/abogados';
declare var $: any;
import {FirestoreService} from 'src/app/services/firestore/firestore.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert'

@Component({
  selector: 'app-registrar-abogado',
  templateUrl: './registrar-abogado.component.html',
  styleUrls: ['./registrar-abogado.component.css']
})
export class RegistrarAbogadoComponent implements OnInit {
  ref:AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  abogado: AbogadosInterface = {
    apellidos: '',
    comentarios: '',
    email: '',
    especialidad: '',
    facebook: '',
    foto: '',
    google: '',
    nombres: '',
    telefono: '',
    twitter: '',

  };


  constructor(private afStorage:AngularFireStorage , private abogadoService:FirestoreService) { }

  guardarAbogado(myForm:NgForm){
		console.log(this.abogado.foto)
		this.abogadoService.createAbogado(this.abogado, () => {
			swal("Representante Legal","Registrado",'success').then((value)=>{
				location.reload()
			})

		})
	
  }

  upload(event){
	const id = Math.random().toString(36).substring(2);
	this.ref = this.afStorage.ref(id);
	this.task = this.ref.put(event.target.files[0]);
	
	this.task.snapshotChanges().pipe(
		finalize(()=>{
			this.ref.getDownloadURL().subscribe((res) => {
				this.abogado.foto = res
				
			})
		})
	).subscribe()
	
  }

  ngOnInit() {
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches
	
	$(".next").click(function(){
	
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
		'transform': 'scale('+scale+')',
		'position': 'absolute'
	  });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
	});
	
	$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
	});
	
	$('#fileup').change(function(){
	//here we take the file extension and set an array of valid extensions
		var res=$('#fileup').val();
		var arr = res.split("\\");
		var filename=arr.slice(-1)[0];
		var filextension=filename.split(".");
		var filext="."+filextension.slice(-1)[0];
		var valid=[".jpg",".png",".jpeg",".bmp"];
	//if file is not valid we show the error icon, the red alert, and hide the submit button
		if (valid.indexOf(filext.toLowerCase())==-1){
			$( ".imgupload" ).hide("slow");
			$( ".imgupload.ok" ).hide("slow");
			$( ".imgupload.stop" ).show("slow");
		  
			$('#namefile').css({"color":"red","font-weight":700});
			$('#namefile').html("File "+filename+" is not  pic!");
			
			$( "#submitbtn" ).hide();
			$( "#fakebtn" ).show();
		}else{
			//if file is valid we show the green alert and show the valid submit
			$( ".imgupload" ).hide("slow");
			$( ".imgupload.stop" ).hide("slow");
			$( ".imgupload.ok" ).show("slow");
		  
			$('#namefile').css({"color":"green","font-weight":700});
			$('#namefile').html(filename);
		  
			$( "#submitbtn" ).show();
			$( "#fakebtn" ).hide();
		}
	});
	
	
  }  
}
