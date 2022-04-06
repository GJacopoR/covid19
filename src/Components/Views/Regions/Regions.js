import {useEffect, useState} from 'react';
import Plot from '../../UI/Plot/Plot';

export default function Regions(props){

    const [regions, setRegions] = useState(null)
    const [data, setData] = useState(null)
    const [selectedRegion, setSelectedRegion] = useState('Abruzzo')

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            let reg = [...new Set(data.map(el => el.denominazione_regione))]
            setRegions(reg)
        })
    }, [])

    function getDataFromSelectedRegion(region){
        const selectedData = data.filter((el) => el.denominazione_regione === region)
        .map((giorno) => {
            return {
                date: giorno.data,
                terapie: giorno.terapia_intensiva,
                "nuovi positivi": giorno.nuovi_positivi,
                "totale positivi": giorno.totale_positivi,
                "dimessi guariti": giorno.dimessi_guariti
            }
        })
        return selectedData
    }



    return(
        <div className="w-full flex flex-wrap px-10">
            <div className="w-1/6 mt-10">
                {regions && <ul className='h-96 border border-gray-200 p-4 rounded-md overflow-scroll bg-gray-100'>{regions.map((el) => (<li key={el} className="mb-4 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" onClick={() => setSelectedRegion(el)}>{el}</li>))}</ul>}
            </div>
            {data && 
                <div className="w-5/6">
                    <h2 className='text-center text-gray-100 mt-3'>Dati per {selectedRegion}</h2>
                    <Plot data={getDataFromSelectedRegion(selectedRegion)}/>
                </div>
            }
        </div>
    )
}