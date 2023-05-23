import Loading from "../components/Loading/Loading"

export default function verifyData(data, loading){
    if(loading){
        return <Loading />
      }
    if(!data){
        return <></>
    }
}