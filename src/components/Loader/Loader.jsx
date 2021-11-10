import React from 'react'
import Puff from "react-loading-icons/dist/components/puff";

function Loader(loading) {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setTimeout(() => {
                setLoading(false);
              }, 2000);
        }
        getProduct();
    }, []);

    

    return (
        <div>
            <>
            <>
        
            Cargando.... <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
        </>
        </>
        </div>
    )
}

export default Loader
