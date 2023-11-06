import React, { useMemo } from 'react'
const UseMemoDemo = () => {
    const [number, setNumber] = useState(0);
    const doubledNum = useMemo(() => {
        return number*2;
    }, [number]);
}
return (
    <>
        <h1>{number}</h1>
        <h2>{doubledNum}</h2>
        <button onClick={setNumber(number+1)}>increment</button>
    </>
)

export default UseMemoDemo