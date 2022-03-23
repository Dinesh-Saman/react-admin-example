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
        <TextField source='Name' />
        <TextField source='Address' />
        <TextField source='phoneNo' />
        <TextField source='district' />
        <TextField source='province' />
        <DateField label={'DOB'} source='DOB'/>
        <TextField source='licenNo' />
        <DateField source='licenValidity' />
        <DateField label={'licenIssueDate'} source='licenIssueDate'/>
        <EditButton source='Edit Button' basePath='/driver_Management' />
        <DeleteButton source='Delete Button' basePath='/driver_Management' />
      </Datagrid>
    </List>
  )
}

export default PostList
