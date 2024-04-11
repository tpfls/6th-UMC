const Modal = ({close}) => {
    return(
        <>
        <div className="modal1">    
        <div className="modal">
            <h1>안녕하세요</h1>
            <h4>모달 내용은 어쩌고 저쩌고..</h4>
            <button id="button1" onClick={close}>닫기</button>
        </div>
    </div>
        </>
    )
}

export default Modal