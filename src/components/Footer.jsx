/* eslint-disable react/prop-types */
import "./Footer.css"

export function Footer({filter}){
    console.log("Render [Footer]")
   
    return <footer className="footer">
            <p>{JSON.stringify(filter)}</p>
    </footer>
   
}