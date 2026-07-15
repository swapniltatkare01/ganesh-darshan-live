export default function Button(props){
    return(
      <button className="bg-orange-500 hover:bg-orange-700 p-4 rounded-lg text-white">{props.text}</button>
    );
}