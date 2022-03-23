import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import VehicleList from './components/Vehicle/VehicleList'
import AddVehicle from './components/Vehicle/AddVehicle'
import EditVehicle from './components/Vehicle/EditVehicle'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='vehicle_Management'
        list={VehicleList}
        create={AddVehicle}
        edit={EditVehicle}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App
