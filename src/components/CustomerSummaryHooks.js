import React , {useState} from 'react'

function CustomerSummaryHooks (props) {
    return (
        <div>
        <input type= 'button' value = 'Calculate Tip And Customer'
         onClick=  {(event) => {props.sumCustomerTotal()}} />
         {/* {(event)=>{handleAdd()}} */}
        <table border="3" width='100%'>
            <tr>
                <th> Total Customer </th>
                <th> Tip </th>
            </tr>
            <tr>
                <th> {props.sumCust} </th>
                <th> {props.sumTip} </th>
            </tr>
        </table>
    </div>

    )
}
export default CustomerSummaryHooks