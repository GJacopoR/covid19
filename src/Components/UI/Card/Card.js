export default function Card(props){

    // new Intl.NumberFormat().format(props.value) is an ECMAScript 6 object that gives the number a specific format. Without specific format in the first parenthesis, it will only add the points to the number.

    return <div className="p-4 border border-gray-200 shadow-lg rounded-lg">
        <h3 className="text-gray-200 font-semibold">{props.label}</h3>
        <h4 className="text-gray-400 text-lg text-right font-bold mt-4">{new Intl.NumberFormat().format(props.value)}</h4>
    </div>
}