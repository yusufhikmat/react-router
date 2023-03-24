import React, { useEffect, useState } from 'react'

const useAxiousFetch = (dataUrl) => {
    const [data, setData] = useState([])
    const[fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
 
    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) =>{
            setIsLoading(true);
            try{
                const response = await axios.get(url, {
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null)
                }

            }catch(err){
                setFetchError(err.message);
                setData([]);

            }finally{


            }
        }
    })

}

export default useAxiousFetch