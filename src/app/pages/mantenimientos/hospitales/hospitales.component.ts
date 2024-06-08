import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hospital } from '../../../models/hospital.model';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';
import { HospitalService } from '../../../services/hospital.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { Subscription, delay } from 'rxjs';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.css'
})
export class HospitalesComponent  implements OnInit, OnDestroy {

  public hospitales: Hospital[] = [];
  private imgSubs!: Subscription;

  public cargando: boolean = true;


  constructor( 
    private busquedasService: BusquedasService,
    private hospitalService: HospitalService,
    private modalImagenService: ModalImagenService,

     ) { }

     ngOnDestroy(): void {
      this.imgSubs.unsubscribe();
    }
  
    ngOnInit(): void {
      this.cargarHospitales();
  
      //refrescar la tabla con la nueva imagen elegida
      this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
        .pipe(delay(100))
        .subscribe( img => this.cargarHospitales() );
    }

  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.cargarHospitales();
    }

    this.busquedasService.buscar( 'hospitales', termino )
        .subscribe( resp => {

          this.hospitales = resp;

        });
  }


  eliminarHospital( hospital: Hospital ) {

    this.hospitalService.borrarHospital( hospital._id! )
        .subscribe( resp => {
          this.cargarHospitales();
          Swal.fire( 'Borrado', hospital.nombre, 'success' );
        });

  }
  
  guardarCambios( hospital: Hospital ) {

    this.hospitalService.actualizarHospital( hospital._id!, hospital.nombre )
        .subscribe( resp => {
          Swal.fire( 'Actualizado', hospital.nombre, 'success' );
        });

  }

  abrirModal(hospital: Hospital) {

    this.modalImagenService.abrirModal( 'hospitales', hospital._id!, hospital.img );

  }

  async abrirSweetAlert() {
    const { value = '' } = await Swal.fire<string>({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del nuevo hospital',
      input: 'text',
      inputPlaceholder: 'Nombre del hospital',
      showCancelButton: true,
    });
    
    if( value.trim().length > 0 ) {
      this.hospitalService.crearHospital( value )
        .subscribe( (resp: any) => {
          this.hospitales.push( resp.hospital )
        })
    }
  }
  cargarHospitales() {

    this.cargando = true;
    this.hospitalService.cargarHospitales()
        .subscribe( hospitales => {
          this.cargando = false;
          this.hospitales = hospitales;
        })

  }
}
