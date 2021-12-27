import React from 'react';
import Job from './Job'

const Date = ({date}) => {
    return(
        <div>
            <li>
                <div>
                    {date}
                </div>
                <div>
                    <Job />
                </div>
            </li>
        </div>
    )
}

export default Date;