import { useField } from 'formik'
import React from 'react'
import { FormInput,Label } from 'semantic-ui-react'

export default function HrmsTexInput({...props}) {  


   const [field,meta]=useField(props)   
    return (
       <FormInput error={meta.touched && !!meta.error}> 
         
      
           <input {...field} {...props}/> 
           {meta.touched && !!meta.error ?(
                <Label pointing basic color="red" content={meta.error}></Label>
                     
           ):null}
       </FormInput>
    )
}
