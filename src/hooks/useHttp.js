import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url,config)=>{
    const response = await fetch(url,config);
    const resData = await response.json();
    if(!response.ok) {
        throw new Error(resData.message || 'Something went wrong')
    }
    return resData;
}
export default function useHttp(url,config,initialData){
    const [data,setData] = useState(initialData);
    const [error,setError] = useState();
    const [isLoading,setIsLoading] = useState(false);
    
    const handleClearData = ()=>{setData([]);}

    const sendRequest = useCallback(async (data)=>{
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url,{...config,body: data});
            setData(resData);
        }
        catch(error) {
            setError(error.message || 'something went wrong');
        }
        setIsLoading(false);
    },[url,config]);
    useEffect(()=>{
        if(!config || !config.method || (config.method === 'GET')){
            sendRequest();
        }
        
    },[sendRequest,config])
    return {
        data,
        isLoading,
        error,
        sendRequest,
        handleClearData
    }
}