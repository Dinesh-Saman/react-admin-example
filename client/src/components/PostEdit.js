import React from 'react'
import { Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Vehicle' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='vehicleType' />
        <TextInput source='vehicleMake' />
        <TextInput source='vehicleModel' />
        <TextInput source='vehicleNo' />
        <TextInput source='ownerName' />
        <DateInput label={'purchased Date'} source='purchasedDate'/>
        <DateInput label={'registered Date'} source='registeredDate'/>
        <TextInput source='manufactureCountry' />
        <TextInput source='manufactureDate' />
        <TextInput source='engineNo' />
        <TextInput source='chassiNo' />
        <DateInput label={'insurance Date'} source='insuranceDate'/>
        <TextInput source='vehicleWeight' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
