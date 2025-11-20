import faq from "./json/footer.json"
import { FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer=()=>{
const icons={
FaMapMarkedAlt:<FaMapMarkedAlt/>,
FaMapMarkerAlt:<FaMapMarkerAlt/>,
MdEmail:<MdEmail/>,
FaPhoneAlt:<FaPhoneAlt/>
}
return(
    <>
    <div className="f1">
        {
            faq.map((ele)=>

        <div key={ele.id} className="boxx">
            <div className="loc">{icons[ele.icon]}</div>
            <div className="add"><p>{ele.label}</p>
            <p className="ol">{ele.value}</p></div>
        </div>
            )
        }
    </div>
    </>
)

}