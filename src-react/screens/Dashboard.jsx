import React from 'react'
import { GetAddonInput } from '../components/GetAddonInput'
import { AddonTable } from '../components/AddonTable'
const { app } = window.require('electron').remote

export class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <GetAddonInput />
        <AddonTable />
        <p>
          Version: {app.getVersion()}
        </p>
      </div>
    )
  }
}
