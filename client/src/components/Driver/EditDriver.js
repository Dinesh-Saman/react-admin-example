import React from 'react'
import { Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Vehicle' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='Name' />
        <TextInput source='Address' />
        <TextInput source='phoneNo' />
        <TextInput source='district' />
        <TextInput source='province' />
        <DateInput label={'DOB'} source='DOB'/>
        <TextInput source='licenNo' />
        <DateInput source='licenValidity' />
        <DateInput label={'licenIssueDate'} source='licenIssueDate'/>
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
