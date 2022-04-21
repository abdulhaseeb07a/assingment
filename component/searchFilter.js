import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQueryParams,StringParam} from 'next-query-params';

export default function SearchFilters({listAppType,listAppId,onSearch}){
    const [actionType, setactionType] = useState();
    const [applicationType, setapplicationType] = useState();
    const [applicationId, setapplicationId] = useState();
    const [fromDate, setfromDate] = useState();
    const [toDate, settoDate] = useState();

    const [query, setQuery] = useQueryParams({
        apType: StringParam,
        acType: StringParam,
        apId: StringParam,
        fDate: StringParam,
        tDate: StringParam,
      });

      const handledSearch = () =>{
        setQuery(
            {
                apType : applicationType ==="" ?undefined : applicationType,
                acType : actionType ==="" ?undefined : actionType,
                apId : applicationId ==="" ?undefined : applicationId,
                fDate : fromDate ==="" ?undefined : fromDate,
                tDate : toDate ==="" ?undefined : toDate
            }
            )
        
      }
      useEffect(()=>{
           onSearch(query)
      },[query])

    return (
        <>
                    <Form>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="actionType">Action type</label>
                            <select id="actionType" class="form-control" onChange={(e)=>{setactionType(e.target.value)}}>
                                <option selected></option>
                                {listAppType && listAppType.map((item, i) => {
	                               return <option key={i} value={item}>{item}</option>
		
                                })}
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="applicationType">Application type</label>
                            <select id="applicationType" class="form-control" onChange={(e)=>{setapplicationType(e.target.value)}}>
                                <option selected></option>
                                {listAppId && listAppId.map((item, i) => {
	                               return <option key={i} value={item}>{item}</option>
		
                                })}
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="fromDate">From Date</label>
                            <input type="date" class="form-control" id="fromDate" placeholder='Select date' onChange={(e)=>{setfromDate(e.target.value)}}/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="toDate">To Date</label>
                            <input type="date" class="form-control" id="toDate" placeholder='Select date' onChange={(e)=>{settoDate(e.target.value)}}/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="applicationId">Application ID</label>
                            <input type="text" class="form-control" id="applicationId" placeholder='e.g.219841/2021' onChange={(e)=>{setapplicationId(e.target.value)}}/>
                        </div>
                        <div class="form-group col-md-2">
                            <button type="button" class="btn btn-primary btn-style-fix"                            
                            onClick={handledSearch}
                            >Search Logger</button>
                        </div>
                    </div>
                    </Form>
                </>
    );
}