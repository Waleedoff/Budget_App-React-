import {React,useState} from 'react'
import {Button, Modal} from 'components/ui'
import {CurrencyDollar, PencilLine, Trash} from 'phosphor-react'
import { useContext } from 'react'
import { transactionsContext } from 'services/context/budget/transactionsContex'
import { useMemo } from 'react'
import BudgetForm from '../../BudgetForm/BudgetForm'
function SingleTrans({e,categories,defalutData}) {

  const {handleDelete} = useContext(transactionsContext);

  const [flag,setFlag] = useState(false);

  const currentCat = useMemo(()=>{
    let cat = categories.find(c => c.id === e.category)
    console.log(categories);

    if (cat && cat.name){

      
      return cat.name;
      
    }
    else 
    {
      return cat
    }
  },[categories,e])

  return (
    <div className='trans_item'>
      <div className= {`trans_item-icon ${e.type === 'expanse' ? 'error': ''}`}>
        <CurrencyDollar/>
      </div>
      <div className="trans_item-data">
        <h4>{e.title}</h4>
        <div>
          <small>{e.amount}</small>,
          <small>{e.date}</small>,
          <small>{currentCat}</small>
        </div>


      </div>
      <div className="trans_item-cta">
        <Button   icon onClick={()=>setFlag(true)}>
        <PencilLine/>  
        </Button>
        <Button type='error' icon onClick={()=>handleDelete(e.id)}>
          <Trash/>
        </Button>

      </div>
    <Modal visible={flag} closeMode={()=>setFlag(false)} >
        <BudgetForm defalutData={e}/>
     
    </Modal>
    </div>
  )
}

export default SingleTrans