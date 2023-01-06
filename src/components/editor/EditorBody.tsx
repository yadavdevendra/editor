import { text,createMarkup } from './IndexComponents'
import { FaBootstrap, FaItalic, FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaExpandArrowsAlt, FaLink, FaListOl, FaListUl, } from "react-icons/fa";
import parse from 'html-react-parser'
import { Markup } from 'interweave';
import '../../styles.css'
import { useEffect, useState } from 'react';
export const EditorBody = () => {
    const [bold, setBold] = useState<any>(false);
    const [italic, setItalic] = useState<any>(false);
    const [center, setCenter] = useState<any>(false)
    const [data, setData] = useState<string>("cedcosss")
    console.log("data", data);
    const handleBoldChange = (event: any) => {
        setBold(event.target.value);
    };
    function handleItalic(event: any) {
        setItalic(<i>event</i>);
        setBold(false)
    }
    function handleCenterChange(event: any) {
        setCenter(event);
        setBold(false)
        setItalic(false)
    }
  useEffect(()=>{
    const convertdata:any =  <Markup content={text} />
    setData(convertdata)
  })
    return (
        <div >
          
            <h1>TextEditor</h1>
            <div>
                <button value={data}
                    onClick={handleBoldChange}><FaBootstrap />bold</button>
                <button value={data} onClick={(e: any) => handleItalic(e.target.value)}><FaItalic />I</button>
                <button value={data} onClick={(e: any) => handleCenterChange(e.target.value)}><FaAlignCenter />c</button>
                <button><FaAlignJustify /></button>
                <button><FaAlignLeft /></button>
                <button><FaAlignRight /></button>
                <button><FaLink /></button>
                <button><FaListOl /></button>
                <button><FaListUl /></button>
                <select style={{ width: "100px" }}>
                    <option >Normal</option>
                    <option>Heading Large</option>
                    <option>Heading Medium</option>
                    <option>Heading Small</option>
                    <option>Code block</option>
                </select>
                <button><FaExpandArrowsAlt /></button>


            </div>
            {(bold) ? <textarea className={bold ? 'bold' : ''} onChange={(e:any) => setData(e.target.value)} style={{ width: "600px",height: "350px"}}>{data}</textarea> :
                <textarea className={italic ? 'italic' : ''} onChange={(e:any) => setData(e.target.value)} style={{ width: "600px",height: "350px"}}>{data}</textarea>}
            {(center) &&<textarea className={center ? 'center' : ''} onChange={(e: any) => setData(e.target.value)} style={{ width: "600px", height: "350px" }}>{data}</textarea> }
            <div>
                <h1>show data:{data}</h1>
            </div>
        </div>
    )
}
