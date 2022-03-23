import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <DateField label={'last Fuel Date'} source='last_fuel_Date'/>
        <TextField source='fuelType' />
        <TextField source='vehicleType' />
        <TextField source='vehicleMake' />
        <TextField source='vehicleModel' />
        <TextField source='quentity' />
        <TextField source='amount' />
        <TextField source='oldReading' />
        <TextField source='newReading' />
        <TextField source='usage' />
        <TextField source='driverName' />
        <TextField source='totalCapacity' />
        <TextField source='fuelCost' />
        <EditButton source='Edit Button' basePath='/fuel_Management' />
        <DeleteButton source='Delete Button' basePath='/fuel_Management' />
      </Datagrid>
    </List>
  )
}

export default PostList
