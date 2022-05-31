import React from 'react'
import './DayLogger.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { IconButton } from '@mui/material'
import LogCard from '../LogCard/LogCard'
import { useDispatch, useSelector } from 'react-redux'
import { addLog } from '../../features/logger/loggerSlice'

function DayLogger() {
  const { logs } = useSelector((state) => state.logger)
  const dispatch = useDispatch()
  const addLogCard = () => {
    dispatch(
      addLog({
        id: logs.length,
        datetime: new Date().toJSON(),
        description: 'test',
      })
    )
  }
  return (
    <div className='daylogger'>
      <div className='timeline'>
        <div className='addlog'>
          <IconButton style={{ color: 'white' }} onClick={() => addLogCard()}>
            <AddCircleIcon />
          </IconButton>
        </div>

        <div className='loggercards'>
          {logs.map((log) => (
            <LogCard logid = {log.id} key={log.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DayLogger
