function Cards({food,calory}){
  return(
      <div className="card">
          <h1>{food}</h1>
          <h2>You have consumed {calory} calories.</h2>
      </div>
  )
}

export default Cards;