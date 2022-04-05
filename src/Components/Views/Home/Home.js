import { data } from "autoprefixer";
import { Header } from "../../UI/Header/Header";

export default function Home(props){

    const latest = props.data[props.data.length-1]

    return <header>
            <Header latest={latest}/>
        </header>
        
} 