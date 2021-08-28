import React from "react"
import icon_firesentinel from "/workspace/Site-FireSentinel/firesentinelsite/src/imagens/icon_firesentinel.png"
import Card from '../../components/layout/Card'

const Home = props => (
    <div>
    <div>
        <br/><br/>
        <center><img src={icon_firesentinel} alt="Erro ao carregar imagem"/></center>
        <h1>FireSentinel</h1>
        <h2>Um sistema de vigilancia 24 horas </h2>
        <br/>
        <hr/>
        <br/>
        <h2>Funcionalidades do App</h2> 
        
        
    </div>

    <center>
    <div className="Cards">
    <Card titulo="Mapa">
        <p>O Aplicativo FireSentinel possui um mapa, onde mostra os focos de incêndio da região detectados por nossos drones, sensores de fumaça,
             ou denunciados por outros usuários.
        </p>
    </Card>
    <br/>
    <Card titulo="Meu alarme">
        <p>O App pode fazer conexão com nosso sensor de fumaça, caso um incêndio inicie em sua propriedade, o aplicativo notificará você através de seu celular, 
             tornando possível uma reação mais rápida contra o fogo.
        </p>
    </Card>
    <br/>
    <Card titulo="Denúncia">
        <p>O Aplicativo também possui a função de denúncia de incêndio, onde será possível contatar as autoridades ou indicar pelo próprio app o local do incêndio e caso
            essa indicação receba confimações de outros usuários, as autoridades serão informadas sobre.
        </p>
    </Card>
    <br/>
    </div>
    </center>
    </div>
    
)

export default Home
