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

    <div className="Cards">
    <Card titulo="Mapa">
        <p>O Aplicativo FireSentinel possui um mapa, onde mostra os  focos de incendio da região detectados por nossos drones, alarmes de incendio,
             ou denunciados por outros usuarios.
        </p>
    </Card>
    </div>

    </div>
    
)

export default Home
