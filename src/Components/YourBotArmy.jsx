import { useEffect } from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, dischargeBot, releaseBot}){
    
    return(
        <div>
            <h2 className="text-center font-bold text-2xl underline underline-offset-1 mb-4 text-white">
                {army.length === 0 ? "No Army" : "Your Bot Army"}
            </h2>
            
            <div>
                {army.map((bot,index) => (
                    <BotCard 
                    key={index}
                    bot={bot}
                    onClick={() => releaseBot(bot)}
                    onDelete ={() => dischargeBot(bot.id)}
                    inArmy ={true}/>
                ))}
            </div>
        </div>
    )
}

export default YourBotArmy;