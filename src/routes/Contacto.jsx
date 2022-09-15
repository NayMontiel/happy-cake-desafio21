import {useFormulario} from '../hooks/useFormulario';
import Swal from 'sweetalert2';

const Contacto = () => {
    const initialState = {
        email: '',
        descripcion: ''
    }
    const [inputs, handleChange, reset] = useFormulario(initialState);

    const {email, descripcion} = inputs

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion de campos
        if (!email.trim()) {
            // console.log('no deje campos en blanco');
            e.target[0].focus();
            
            // alert validacion
            Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Correo Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        if (!descripcion.trim()) {
             e.target[1].focus();

             Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Descripcion Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        Swal.fire({
            title: 'Éxito!',
            text: 'Mensaje Enviado',
            icon: 'success',
            confirmButtonText: 'ok'
        });

        reset();
    };

  return (
    <div>
        <h2 className='mb-4'>Cuentanos, ¿en que podemos ayudarte?</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='mb-3 fs-4'>Correo:</label>
            <input 
                type="email" 
                name="email" 
                id='email' 
                className='form-control mb-3 ' 
                placeholder='name@example.com'
                value={email} 
                onChange={handleChange}
            />

            <label htmlFor="descripcion" className='mb-3 fs-4'>Descripcion:</label>
            <textarea 
                name="descripcion" 
                id="descripcion" 
                className='form-control mb-3' 
                value={descripcion}
                onChange={handleChange}
            />

            <button className="btn-enviar mt-4">Enviar</button>
        </form>

    </div>
  )
}

export default Contacto