import { FaSpinner } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AfasiaSwal = withReactContent(Swal);

export const AlertLayout = AfasiaSwal.mixin({
    customClass: {
        confirmButton: 'rounded-xl bg-[#002758] font-raleway text-white py-2 px-12 hover:bg-[#3C9AC5] hover:font-semibold transition duration-400',
        cancelButton: 'ml-12 rounded-xl bg-[#EE4452] font-raleway text-white py-2 px-12 hover:bg-[#FF2222] hover:font-semibold transition duration-400',
        title:'font-raleway',
        htmlContainer:'font-raleway',
    },
    buttonsStyling: false,
    confirmButtonText: 'Continuar'
});

export const AlertaLoading = AlertLayout.mixin({
    width: '350px',
    title: <FaSpinner className='rotate text-slate-900'/>,
    showConfirmButton:false,
    customClass:'h-[20vh] content-center'
});