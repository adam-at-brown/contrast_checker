import React from "react"
import data from "../data/collections";

export default function Collections() {
  return (
    <div>
      <h2>Collections Count: {data.collections.length}</h2>
      {data.collections.map(c => {
        return(
          <div key={c.id} style={{ padding: "2rem", background: "white", margin: "1rem auto", maxWidth: "60ch" }}>
          {c.thumbnail_url && (<img src={c.thumbnail_url} alt={c.name} style={{ width: "100px"}} />)}
          <h3>{c.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: c.description }}/>
          {c.tags.length > 0 && <div style={{ display: "flex", justifyContent: "center" }}>
            {c.tags.map(t => <p key={t} style={{ padding: "1rem", margin: "0.5rem", background: "red", color: "white", fontWeight: 700 }}>{t}</p>)}
          </div>}
          <p><a href={c.json_uri}>JSON Data</a></p>
          <p><a href={c.uri}>Collection Page</a></p>
          </div>
        )
      })}
    </div>
  )
}
