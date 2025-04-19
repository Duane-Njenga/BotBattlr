import { useEffect } from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, dischargeBot, releaseBot}){
    
    return(
        <div>
            <h2>Your Bot Army</h2>
            <div>
                {army.map((bot,index) => (
                    <BotCard 
                    key={index}
                    bot={bot}
                    onclick={() => releaseBot(bot)}
                    onDelete ={() => dischargeBot(bot.id)}
                    inArmy ={true}/>
                ))}
            </div>
        </div>
    )
}

export default YourBotArmy;