import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}){
    return(
    <>
         <h2>Bot Collection</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {bots.map((bot, index) => (
                <BotCard key={index} bot = {bot}/>
            ))}

        </div>
    </>
    )
}

export default BotCollection;