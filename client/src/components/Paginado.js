import React from 'react'

function Paginado({currentPage,setCurrentPage,max}) {
    
    function handleLeft(){
        setCurrentPage(prevCurrentPage=>prevCurrentPage-1)
    }

    function handleRight(){
        setCurrentPage(prevCurrentPage=>prevCurrentPage+1)
    }

  return (
    <div>
        <button 
        onClick={()=>handleLeft()}
        disabled={currentPage <= 1 ? true : null}
        >{"<"}</button>
        <button 
        onClick={()=>handleRight()}
        disabled={currentPage >= max ? true : null}
        >{">"}</button>
    </div>
  )
}

export default Paginado;