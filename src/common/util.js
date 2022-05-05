function getDistinctApplicationTypes(arr) {
  let valueArray = arr.map(item => item.applicationType);
  let setOfValue = new Set(valueArray);
  let uniqueValues = [...setOfValue];
  return uniqueValues.filter(element => {
    return element !== null;
  });
}
function getDistinctActiontypes(arr) {
  let valueArray = arr.map(item => item.actionType);
  let setOfValue = new Set(valueArray);
  let uniqueValues = [...setOfValue];
  return uniqueValues.filter(element => {
    return element !== null;
  });
}
function getFilteredData(logs, params) {
  let filteredData = logs.auditLog;
  if (params.apType != undefined) {
    filteredData = filteredData.filter(
      auditLog => auditLog.applicationType === params.apType
    );
  }
  if (params.acType != undefined) {
    filteredData = filteredData.filter(
      auditLog => auditLog.actionType === params.acType
    );
  }
  if (params.apId != undefined) {
    filteredData = filteredData.filter(
      auditLog => auditLog.applicationId == params.apId
    );
  }
  if (params.fDate != undefined && params.tDate != undefined) {
    var startDate = new Date(params.fDate);
    var endDate = new Date(params.tDate);
    filteredData = filteredData.filter(function (a) {
      var hitDates = new Date(a.creationTimestamp.split(' ')[0]) || {};
      return (
        hitDates.getTime() >= startDate.getTime() &&
        hitDates.getTime() <= endDate.getTime()
      );
    });
  }
  return filteredData;
}

export { getDistinctApplicationTypes, getDistinctActiontypes, getFilteredData };
