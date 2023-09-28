import './style.css'
export const TwowaysofCss:React.FC<{}>=()=>{
let mystyle={width:'200px',height:'200px',backgroundcolor:'yellow'}
return <>
<div className="mydiv1"></div> <br />
<div style={mystyle}>hello i am another one</div>
</>


}
