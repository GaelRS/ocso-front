import axios from "axios";

const CountPage = async () => {
   const countLocations = await axios.get("http://127.0.0.1:4000/locations") 
   console.log(countLocations.data)
   const cantidad = countLocations?.data?.length;
   return <div  className="w-2/12">{`Hay: ${cantidad} tienda${cantidad > 1 ? "s" : ""}`}</div>
}
;
export default CountPage;