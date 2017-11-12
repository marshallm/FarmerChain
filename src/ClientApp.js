import React, { Component } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import './App.css';


class ClientApp extends Component{
    render(){
        return(
            <div className='app-layout'>
            <Sidebar/>   
            <Header/>
            <Dashboard/>             
          </div>                        
        )
    }
}

export default ClientApp