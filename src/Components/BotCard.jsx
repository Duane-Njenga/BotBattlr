import "../App.css"

function BotCard({bot}){
    const {name, health, damage, armor,bot_class,avatar_url} = bot
    return(
        <div className="border-4 border-white rounded-2xl shadow-lg shadow-black w-70">
            <h2 className="text-lg font-bold">Name:{name}</h2>
            <img src={avatar_url} alt = {name}
            className="flex justify-center w-50 h-50 object-cover rounded-full border-white border-2 mb-4 " />
            <p>Health:{health}</p>
            <p>Damage:{damage}</p>
            <p>Armor:{armor}</p>
            <p>Class:{bot_class}</p>
            <button
            title="Discharge"
            className="w-full bg-red-600 text-white hover:bg-red-700 rounded-lg"
            >X</button>
        </div>
    )

}

export default BotCard;