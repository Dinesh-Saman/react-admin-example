import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Add New Vehicle' {...props}>
      <SimpleForm>
        <TextInput source='vehicleType' />
        <TextInput source='vehicleMake' />
        <TextInput source='vehicleModel' />
        <TextInput source='vehicleNo' />
        <TextInput source='ownerName' />
        <DateInput label={'purchased Date'} source='purchasedDate'/>
        <DateInput label={'registered Date'} source='registeredDate'/>
        <TextInput source='manufactureCountry' />
        <DateInput source='manufactureDate' />
        <TextInput source='engineNo' />
        <TextInput source='chassiNo' />
        <DateInput label={'insurance Date'} source='insuranceDate'/>
        <TextInput source='vehicleWeight' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
