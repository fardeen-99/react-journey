import faq from "../json/atlas.json"

export const About=()=>{


console.log(faq)
    

return(
    <>
    <div className="about">
    <h1 style={{
        textAlign:"center"
    }}>Here are the Interesting Facts <br />
we’re proud of:</h1>
<div className="boxer">

{
    faq.map((ele)=>
<div key={ele.id} className="card">
    <h1>{ele.country}</h1>
    <p className="o">capital:{ele.capital}</p>
    <p className="s">population:{ele.population}</p>
    <p className="t">Interesting-facts:{ele.fact}</p>

</div>

    )
}

</div>
</div>
    </>
)

}