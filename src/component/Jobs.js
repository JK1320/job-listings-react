import React, {useState, useEffect} from 'react';
import Job from './Job';


const Jobs = ({data, setKeywords, keywords}) => {
const [filteredData, setFilteredData] = useState([]);


    

    useEffect(() => {
      const modifiedData = () => {
        if (keywords.length > 0) {
            const newData = filteredData.filter(d => {
                return (
                    keywords.every(key => {
                        return (
                            d.role === key || 
                            d.level === key ||
                            d.languages.includes(key) ||
                            d.tools.includes(key)
                        )
                    })
                )
            })
            setFilteredData(newData)
        }else {
            setFilteredData(data);
        }
    }
    modifiedData()
    // eslint-disable-next-line
    },[keywords])

    return (
        <div className="jobs">
            {filteredData.map((elem) => {
                return <Job key={elem.id} data={elem} setKeywords={setKeywords} />

            })}
        </div>
    )
}

export default Jobs;
