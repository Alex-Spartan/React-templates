import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const Home = () => {
    const [params] = useSearchParams();
    const sessionId = params.get("session_id")

    useEffect(() => {
        const verifySession = async () => {

            const res = await fetch("http://localhost:3000/payment/return?session_id=" + sessionId)
            const data = await res.json()
            return data;
        }
        if (sessionId) {
            verifySession()
        }
    }, [])
  return (
    
    <div>
        {sessionId ? <h1>Payment Successful</h1> : <h1>Payment Failed</h1>}
    </div>
  )
}
export default Home