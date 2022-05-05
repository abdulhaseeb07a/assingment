const tableColumns = [
  {
    Header: 'Log ID',
    accessor: 'logId', // accessor is the "key" in the data
  },
  {
    Header: 'Application Type',
    accessor: 'applicationType',
  },
  {
    Header: 'Application ID',
    accessor: 'applicationId',
  },
  {
    Header: 'Action',
    accessor: 'actionType',
  },
  {
    Header: 'Action Detail',
    accessor: '-/-',
  },
  {
    Header: 'Date:Time',
    accessor: 'creationTimestamp',
  },
];

export { tableColumns };
