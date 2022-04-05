import { data } from "autoprefixer";
import { Header } from "../../UI/Header/Header";
import Plot from "../../UI/Plot/Plot";

export default function Home(props){

    const data = props.data.map( giorno => {
        return {
            date: giorno.data,
            terapie: giorno.terapia_intensiva,
            "nuovi positivi": giorno.nuovi_positivi,
            "totale positivi": giorno.totale_positivi,
            "dimessi guariti": giorno.dimessi_guariti
        }
    })

    const latest = props.data[props.data.length-1]

    return <>
        <section>
            <header>
                <Header latest={latest}/>
            </header>
        </section>
        <section>
            <Plot data={data}/>
        </section>
    </>

} 