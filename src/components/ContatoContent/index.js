import styles from '@/components/ContatoContent/ContatoContent.module.css'


const SobreContent = ()=>{
    return(
    
        <div className="column left">
        <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
        <div className="icons">
            <div className="row">
                <i className="fa-solid fa-user"></i>
                <div className="info">
                    <div className="head">
                        Empresa
                    </div>
                    <div className="sub-title">
                        Foco
                    </div>
                </div>
            </div>

            <div className="row">
                <i className="fa-solid fa-location-dot"></i>
                <div className="info">
                    <div className="head">
                        Enderço
                    </div>
                    <div className="sub-title">
                        Avenida Nove de Julho, 1539
                    </div>
                </div>
            </div>

            <div className="row">
                <i className="fa-solid fa-envelope"></i>
                <div className="info">
                    <div className="head">
                        E-mail
                    </div>
                    <div className="sub-title">
                       focoensinoonline@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default SobreContent