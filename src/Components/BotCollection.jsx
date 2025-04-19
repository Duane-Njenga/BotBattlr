import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, enlistBot}){
    return(
    <>
         <h2 className="text-center font-bold text-2xl underline underline-offset-1 ">Bot Collection</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {bots.map((bot) => (
                <BotCard key={bot.id} 
                bot = {bot}
                onClick ={() => enlistBot(bot)}
                inArmy ={false}
                />
            ))}

        </div>
    </>
    )
}

export default BotCollection;