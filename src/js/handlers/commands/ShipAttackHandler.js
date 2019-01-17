class ShipAttackHandler {
	static get ID() {
		return 11521;
	}

	constructor() {
		this._handler = function (e, a) {
			var shipAttackCmd = JSON.parse(e.detail);
			let attackerID = shipAttackCmd[Variables.attackerId];
			let shipAttackedID = shipAttackCmd[Variables.attackedId];
			try {
				if (window.settings.sentinelMode && a.sentinelship != null) {
					if (attackerID == window.globalSettings.sentinelid) {
						a.sentinelship.targetId = shipAttackedID;
					}     
					if (shipAttackedID == window.globalSettings.sentinelid) {
						a.sentinelship.attackerID = attackerID;
					}
				}
				let ship = a.ships[attackerID];
				if (ship != null){
					if ((window.globalSettings.avoidAttackedNpcs && ship.isNpc) && (attackerID != window.hero.id) && !window.settings.ggbot && (shipAttackedID != window.hero.id)) {
						if (a.pet != null && attackerID != a.pet.id) {
							a.blackListId(shipAttackedID);
						}
					}
					if (a.pet != null && shipAttackedID == a.pet.id){
						console.log(ship.name + " is attacking your pet.");
					}
					if (shipAttackedID == window.hero.id) {
						a.ships[attackerID].attacksUs = true;
					} else {
						a.ships[attackerID].attacksUs = false;	
					}
				}
				
			} catch (exception) {
				console.log(exception.message);
				console.log(shipAttackCmd);  
			};
		}
	}

	get handler() {
		return this._handler;
	}
}