import styles from '../styles/Home.module.css'
import React, { useMemo, useState} from "react";
import Table from "../component/tableun";
import SearchFilters from '../component/searchFilter';
import {getDistinctApplicationTypes , getDistinctActiontypes,getFilteredData} from '../common/util'
import {tableColumns} from '../common/constants'


function Home({logs , totalRecords ,listAppType,listAppId}) {

  /** states and constants initializations */
  const columns = useMemo(() => tableColumns,[])
  const [filterData, setfilterData] = useState(logs.auditLog)

  /** Child filter button event handler */
  const handledSearch =(params)=>{
    if(params.apType!=undefined || params.acType!=undefined || params.apId!=undefined || params.fDate!=undefined || params.tDate!= undefined){
      let filteredData = getFilteredData(logs,params)
      setfilterData(filteredData)
    }else{
      setfilterData(logs.auditLog)
    }
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className='searchLogger full-view-width'>
          {listAppType && <SearchFilters listAppType={listAppType} listAppId={listAppId} onSearch={handledSearch}/>}
         </div>

        <div className="App full-view-width">
          { filterData && <Table columns={columns} data={filterData} /> }
        </div>  
      </main>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
  const json = await res.json()

  return {
    props: {
      logs: json.result,
      listAppType : getDistinctActiontypes(json.result.auditLog),
      listAppId : getDistinctApplicationTypes(json.result.auditLog),
    },
  }
}

export default Home;

