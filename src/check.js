import React from 'react';
import {useParams} from 'react-router-dom'

function Check(props) {
    const {id} = useParams();
    return (
        <div>
        Yooo your id is  {id}
        </div>
    );
}

export default Check;