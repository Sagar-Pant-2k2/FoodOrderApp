
import logo from '../assets/logo.jpg'
export default () => {
    return <div id = "main-header">
        <div id="title"><img src={logo}/><h1>Food App Ui</h1></div>
        <nav><button>Cart (0)</button></nav>
    </div>
}