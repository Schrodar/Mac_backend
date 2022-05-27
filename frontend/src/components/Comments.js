

function Comments({answare}) {



  return (
    <div key={answare._id} style={{ position: "relative",display: 'flex', margin: "2rem 0",border: "solid black 0.1rem", height: "min-content", width: "inherit", flexDirection: "row", borderRadius: "2rem"}}>
      <div style={{ position: "absolute", width: "10rem", height: "100%", borderRight: "solid black 0.1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem"}}>{answare.date}</div>
      <div style={{ margin: "2rem 13rem", display: "flex", fontSize: "1.6rem",}}>{answare.text}</div>
    </div>
  )
}

export default Comments