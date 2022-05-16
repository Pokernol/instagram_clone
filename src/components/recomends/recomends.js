
import React from "react";
import "./recomends.css";
import Pokernol from "./img/pokernol.png";


function Recomends(){
return(

    <div className="recomends">
        <div className="recomends_header">
            <img className="perfil_ft" src={Pokernol}/>
        </div>
        <div className="div_nameuser">
            <a className="nameuser" href="#">pokernol</a>
            <div className="nome_">Leonardo Vinícius</div>
        </div>
        <div className="troca_conta">Mudar</div>
        <div className="body">
            <div className="sugestoes">Sugestões para você</div>
            <div className="tudo">Ver tudo</div>
        </div>
        <div className="sug_perfil">
                <ul className="sug_perfil_">
                    <li className="lista_perfil">
                        <img className="fotinha" src="https://i.pinimg.com/564x/1e/80/cd/1e80cd64385aeb7c4af3f22ddd66c7d6.jpg" alt=""/>
                        <div className="bye_problem">
                        <div className="resu">idemonikedn</div> 
                        <p className="seguidopor">seguido por idiotmoosse</p>
                        </div>
                        <div className="seguir_btn">Seguir</div>
                    </li>
                    <li className="lista_perfil">
                        <img className="fotinha" src="https://i.pinimg.com/564x/a1/a1/3e/a1a13e204f689dfeb089b621aad268f6.jpg" alt=""/>
                        <div className="bye_problem">
                        <div className="resu">mengoaiohto</div>
                        <p className="seguidopor">seguido por gustavo_amorim</p>
                        </div>
                        <div className="seguir_btn">Seguir</div>
                    </li>
                    <li className="lista_perfil">
                        <img className="fotinha" src="https://i.pinimg.com/564x/4c/25/08/4c250818f831b6fc62b59896b7739a1a.jpg" alt=""/>
                        <div className="bye_problem">
                        <div className="resu">miaandbillie</div>
                        <p className="seguidopor">seguido por sasakkj.x e idi...</p>
                        </div>
                        <div className="seguir_btn">Seguir</div>
                    </li>
                    <li className="lista_perfil">
                        <img className="fotinha" src="https://i.pinimg.com/564x/6b/ad/01/6bad01ff7aac5966dbf5cb761cbf1c96.jpg" alt=""/>
                        <div className="bye_problem">
                        <div className="resu">🇦​🇳​🇬​🇺​🇸​ᴳᵒᵈ</div>
                        <p className="seguidopor">seguido por ribeiroaqui e gus...</p>
                        </div>
                        <div className="seguir_btn">Seguir</div>
                    </li>
                    <li className="lista_perfil">
                        <img className="fotinha" src="https://i.pinimg.com/736x/df/e1/31/dfe1315ed9934c6963d1980eddf85017.jpg" alt=""/>
                        <div className="bye_problem">
                        <div className="resu">Intermagic</div>
                        <p className="seguidopor">Novo no Instagram</p>
                        </div>
                        <div className="seguir_btn">Seguir</div>
                    </li>
                    <li className="rodaope">
                    <div> Sobre · Ajuda · Imprensa · API · Carreiras · Privacidade ·
                        Termos · Localizações · Principais · contas · Hashtags ·
                        Idioma</div>
                        <div className="meta">© 2022 INSTAGRAM FROM META</div>
                    </li>
                </ul>
            </div>
    </div>
    
    

);
}
export default Recomends;