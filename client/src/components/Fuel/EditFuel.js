import React from 'react'
import { Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Vehicle' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <DateInput label={'last Fuel Date'} source='last_fuel_Date'/>
        <TextInput source='fuelType' />
        <TextInput source='vehicleType' />
        <TextInput source='vehicleMake' />
        <TextInput source='vehicleModel' />
        <TextInput source='quentity' />
        <TextInput source='amount' />
        <TextInput source='oldReading' />
        <TextInput source='newReading' />
        <TextInput source='usage' />
        <TextInput source='driverName' />
        <TextInput source='totalCapacity' />
        <TextInput source='fuelCost' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
