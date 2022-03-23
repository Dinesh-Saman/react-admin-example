import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  //DateField,
  EditButton,
  DeleteButton,
  DateField,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='vehicleType' />
        <TextField source='vehicleMake' />
        <TextField source='vehicleModel' />
        <TextField source='vehicleNo' />
        <TextField source='ownerName' />
        <DateField label={'purchased Date'} source='purchasedDate'/>
        <DateField label={'registered Date'} source='registeredDate'/>
        <TextField source='manufactureCountry' />
        <TextField source='manufactureDate' />
        <TextField source='engineNo' />
        <TextField source='chassiNo' />
        <DateField label={'Insurance Date'} source='insuranceDate'/>
        <TextField source='vehicleWeight' />
        <EditButton source='Edit Button' basePath='/vehicle_Management' />
        <DeleteButton source='Delete Button' basePath='/vehicle_Management' />
      </Datagrid>
    </List>
  )
}

export default PostList
