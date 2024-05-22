import { Component, OnDestroy, OnInit } from '@angular/core';
import { Medico } from '../../../models/medico.model';
import { Subscription, delay } from 'rxjs';
import { BusquedasService } from '../../../services/busquedas.service';
import { MedicoService } from '../../../services/medico.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent   implements OnInit, OnDestroy{

  public cargando: boolean = true;
  public medicos: Medico[] = [];
  private imgSubs!: Subscription;

  constructor( private medicoService: MedicoService,
    private modalImagenService: ModalImagenService,
    private busquedasService: BusquedasService ) { }

    ngOnDestroy(): void {
      this.imgSubs.unsubscribe()
    }
  
    ngOnInit(): void {
      this.cargarMedicos();
  
      this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
        .pipe(delay(100))
        .subscribe( img => this.cargarMedicos() );
    }

  cargarMedicos() {
    this.cargando = true;
    this.medicoService.cargarMedicos()
      .subscribe( medicos => {
        this.cargando = false;
        this.medicos = medicos;
      });
  }
  

  abrirModal(medico: Medico) {

    this.modalImagenService.abrirModal( 'medicos', medico._id!, medico.img );

  }

  borrarMedico( medico: Medico ) {

    Swal.fire({
      title: '¿Borrar médico?',
      text: `Esta a punto de borrar a ${ medico.nombre }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        
        this.medicoService.borrarMedico( medico._id! )
          .subscribe( resp => {
            
            this.cargarMedicos();
            Swal.fire(
              'Médico borrado',
              `${ medico.nombre } fue eliminado correctamente`,
              'success'
            );
            
          });

      }
    })

  }


  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.cargarMedicos();
    }

    this.busquedasService.buscar( 'medicos', termino )
        .subscribe( resp => {
          this.medicos = resp;
        });
  }
  guardarCambios( medico: Medico ) {

    this.medicoService.actualizarMedico(  medico )
        .subscribe( resp => {
          Swal.fire( 'Actualizado', medico.nombre, 'success' );
        });

  }

}
