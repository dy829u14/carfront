import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function Tour(props) {
    const [tourdate, setCdate] = useState({
        cdate: "",
        id: ""
    });
    const [tours, setTours] = useState([]);
    const onChange = (e) => {
        setCdate({
            ...tourdate,
        [e.target.name] : e.target.value
        });
    }
    const getTour = () => {
        fetch(`${SERVER_URL}weather/wea?CURRENT_DATE=${tourdate.cdate}&CITY_AREA_ID=${tourdate.id}`)
        .then(response=> response.json())
        .then(data=>{
            console.log(data.response.body.items.item);
            setTours(data.response.body.items.item);
        })
        .catch(e=>console.log(e));
    }
    return (
        <div>
            여행지 조회
            <input name='cdate' value={tourdate.cdate} onChange={onChange} />            
            <select name='id' onChange={onChange}>
                <option value="2717000000">대구 서구</option>
                <option value="2620000000">부산 영도구</option>
                <option value="3114000000">울산 남구</option>
                <option value="1138000000">서울 은평구</option>
                <option value="4681000000">전남 강진군</option>
                <option value="2635000000">부산 해운대구</option>
                <option value="4315000000">충북 제천시</option>
            </select>
            <button onClick={getTour}>조회</button>
            <div>
                <ul>
                    {tours.map((t,index)=><li key={index}>{t.tm} : {t.totalCityName} : {t.doName} : {t.kmaTci} : {t.TCI_GRADE}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Tour;