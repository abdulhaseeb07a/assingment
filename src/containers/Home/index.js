import styles from '../../styles/Home.module.css';
import SearchFilters from '../../components/SearchFilter';
import Table from '../../components/Table';
import PageHead from '../PageHead';

function HomePage({
  listAppType,
  listAppId,
  handledSearch,
  boxstate,
  loading,
  pageCount,
  fetchData
}){  
  return (
    <div className={styles.container}>
      <PageHead />
      <main className={styles.main}>
        {listAppType && 
          <SearchFilters
            listAppType={listAppType} 
            listAppId={listAppId} 
            onSearch={handledSearch} 
            />
        }        
        {boxstate.data &&
          <Table
            data={boxstate.data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
            totalCount={boxstate.totalRecords}
          />
        }
      </main>
    </div>
  )
}

export default HomePage