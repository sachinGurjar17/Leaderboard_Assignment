import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Avatar from '@mui/material/Avatar';
import users from './data/unique_leaderboard_users.json'
import './App.css'



function App() {

  const [currPage, setCurrPage] = useState(0);


  const handleChangePage = function(event, value){
    setCurrPage(value-1);
  }
  

  return (
    <div className='container'>
        <Top/>
        <Pagination count={5} color="secondary" size="medium" onChange={handleChangePage} />
        <Page currPage={currPage}/>
    </div>
  )
}

const Page = ({currPage})=>{

    const perPageUsers = 20 ;
    let start = currPage*perPageUsers;
    let end = start+perPageUsers;

    if(currPage == 0){
      start = 3 ;
    }

    const currPageUsers = users.slice(start,end);
    console.log(currPageUsers);
    
  return (
    <div className='pageContainer'>
      {
        currPageUsers.map((user)=>(
          <div className='pageItem'>
            <div className='rankContainer'>
              <Avatar >{user.rank}</Avatar>
              <h3>{user.name}</h3>
            </div>
            <div>{user.points} <span style={{fontSize:"20px"}}>🪙</span> </div>
          </div>
        ))
      }
    </div>
  )
}

const Top = ()=>{

  const medal = ['👑', '🥈', '🥉'];

  return(
    <>
        <div className='topContainer'>
          {users.slice(0,3).map((user, idx)=>
            <div>
            <Avatar className='avatar' alt="Remy Sharp" src={`/public/images/avatar${idx+1}.jpg`} />
            <h1>{medal[idx]}</h1>
            <h3>{user.name}</h3>
            <div><span style={{fontSize:"20px"}}>🪙</span>{user.points} </div>
          </div>)}
      </div>
    </>
  )
}

export default App
