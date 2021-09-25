import './styles.css'
import nft from './nft.png'
import bunny from './bunny.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
    return <>
        <h1>React Typescript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={nft} alt="nft img" width="300" height="300" />
        <img src={bunny} alt="bunny img" width="300" height="300" />
        <ClickCounter />
    </>
}