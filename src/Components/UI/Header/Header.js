import Card from "../Card/Card";

export const Header = (props) => {

    console.log(props.latest)

    const cardsData = [
        {
            label:'totale casi',
            value: props.latest.totale_casi
        },
        {
            label:'totale positivi',
            value: props.latest.totale_positivi
        },
        {
            label: 'guariti',
            value: props.latest.dimessi_guariti
        },
        {
            label: 'deceduti',
            value: props.latest.deceduti
        },
    ]

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((data) => {
              return <Card key={data.label} label={data.label} value={data.value}/>
          })}
        </div>
      </div>
    );
};