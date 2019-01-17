class ShipCreateHandler {
	static get ID() {
		return 21219;
	}

	constructor() {
		this._handler = function (e, a) {
			e.detail = e.wholeMessage.split("|").slice(1).join("");

			let shipCreateCmd = JSON.parse(e.detail);
			try {
				if (!a.ships.hasOwnProperty(shipCreateCmd.userId)){
					let name = shipCreateCmd.userName;
					if (name == null) {
						name = "No-Name";
					}
					
					if (shipCreateCmd.npc && !window.settings.ggbot) {
						name = name.replace(/[^a-zA-Z+\s]/g, "");
						name = name.trim();
					}
					
					a.ships[shipCreateCmd.userId] = new Ship(shipCreateCmd.x, shipCreateCmd.y, shipCreateCmd.userId, shipCreateCmd.npc, name, shipCreateCmd.factionId, shipCreateCmd.modifier, shipCreateCmd[Variables.clanDiplomacy].type, shipCreateCmd.cloaked);
				}
			} catch (exception) {
				console.log(exception.message);
				console.log(shipCreateCmd);
			};
		}
	}

	get handler() {
		return this._handler;
	}
}