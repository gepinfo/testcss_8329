import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./second.scss";
import  {service}   from './second.service';

class Second extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    first : {
    Name: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ first: { ...this.state.first, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.first.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">second</h2>
        <div id="template-i37w" className="gjs-row">
    <div id="template-ib7j" className="gjs-cell">
        <button id="template-iwnj" className="button btn btn-primary ">Send</button>
    </div>
    <div id="template-ihk8" className="gjs-cell">
        <button id="template-i3w8" className="button btn btn-primary ">Send</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Second;