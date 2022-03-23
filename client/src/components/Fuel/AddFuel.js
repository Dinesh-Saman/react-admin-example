import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Add New Vehicle' {...props}>
      <SimpleForm>
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
    </Create>
  )
}

export default PostCreate
