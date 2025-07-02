import React from 'react';
import {Link} from 'react-router-dom';

function DisplayPage({entries}){
    return(
        <div style={{padding:'20px'}}>
            <h2>Submitted Entries</h2>
            <ul>
                {entries.map((entry,index)=>(
                    <li key={index}>
                        <strong>{entry.name}</strong>-{entry.email}
                    </li>
                ))}

            </ul>
            <Link to="/">Go Back To Form</Link>
        </div>

    );
}
export default DisplayPage;