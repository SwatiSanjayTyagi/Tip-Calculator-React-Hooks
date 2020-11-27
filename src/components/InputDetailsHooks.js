import React , { useState } from 'react'
import CustomerSummaryHooks from  '../components/CustomerSummaryHooks'

function InputDetailsHooks () {
    const [inputItem , setInputItem] = useState({bamt:0,
                                                 per:'',
                                                 tip:0,
                                                 custName:'',
                                                 totalTip:0,
                                                 custCount:0
                                                })
    
    const [custArray , setCustArray] = useState([])

    const handleAdd = () => {
                            setCustArray( [ ...custArray,
                            {name : inputItem.custName,
                            bal : inputItem.bamt,
                            serPer : inputItem.per,
                            tip : inputItem.bamt * inputItem.per}
                            ] , inputItem.custName='', inputItem.bamt='' )
                            }
                            
    const customerTotal = () => {
                                var totalTip =0 , custCount = 0
                                
                                custArray.forEach((item)=>{
                                    totalTip += item.tip
                                })
                                
                                setInputItem ({...inputItem, totalTip: totalTip,
                                    custCount: custArray.length})
                            }
                        
    return(
            <div>
                <strong>Enter your bill amount</strong>
                <br/>
                <br/>
                <input type='text' value={inputItem.bamt} 
                onChange={(event)=>{setInputItem({...inputItem,bamt: event.target.value})}} autoFocus/>
                <br/>
                <br/>
                <strong>How was the service</strong>
                <select value = {inputItem.per} 
                onChange={(event)=>{setInputItem({...inputItem,per: event.target.value})}}>
                    <option value='0'>Choose...</option>
                    <option value='0.2'>Excelent - 20%</option>
                    <option value='0.1'>Moderate - 10%</option>
                    <option value='0.05'>Bad - 5%</option>
                </select>
                <input type = 'text' value = {inputItem.custName} placeholder ='Customer Name'
                onChange={(event)=>{setInputItem({...inputItem,custName: event.target.value})}}/>
                {console.log(inputItem)}
                <input type = 'button'  value ="Add Customer" onClick={(event)=>{handleAdd()}} />
                
                {console.log(custArray)}
                <br/>
                <strong>Customer List</strong>
                <ul>
                {custArray.map((item, index) => (
                    <li key={index}><strong>{`${item.name} offered a tip of Rs. ${item.tip }`}</strong></li>
                        ))}
                </ul>
                <CustomerSummaryHooks sumCust={inputItem.custCount} sumTip={inputItem.totalTip} sumCustomerTotal= {customerTotal} />
            </div>
    )
}

export default InputDetailsHooks