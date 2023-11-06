import React, {useState} from 'react'

export default function UseStatehook() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);

    const handleAdd = () => {
        setItems([...items, {"item": item}]);
    }
    const handleDel = (item) => {
        const fitems = items.filter((it) => it.item !== item.item);
        setItems([...fitems]);
    }
    const tdata = items.map((it, index) => (
        <tr key={index}>
            <td cellpadding = "20px">
                <span>{it.item}</span>
            </td>
            <td>
                <button onClick={()=>handleDel(it)}>x</button>
            </td>
        </tr>
    ), []);

    return (
        <div>
            <input type="text" size="20" value={item} 
            onChange={(e) => setItem(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <table align='center'>{tdata}</table>
        </div>
    )
}
