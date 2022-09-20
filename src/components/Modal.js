{/*
  Agregar <div id="modal"></div> en /public/index.html
*/}
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal')
  );
}

export { Modal };
