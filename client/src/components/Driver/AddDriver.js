import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Add New Vehicle' {...props}>
      <SimpleForm>
        <TextInput source='Name' />
        <TextInput source='Address' />
        <TextInput source='phoneNo' />
        <TextInput source='district' />
        <TextInput source='province' />
        <DateInput label={'DOB'} source='DOB'/>
        <TextInput source='licenNo' />
        <DateInput source='licenValidity' />
        <DateInput label={'licenIssueDate'} source='licenIssueDate'/>
        //
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
