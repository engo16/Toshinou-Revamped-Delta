class ShipSelectedHandler {
	static get ID() {
		return 3877;
	}

	constructor() {
		this._handler = function (e, a) {
			let parsedJson = JSON.parse(e.detail);
			try {
				let ship = a.ships[parsedJson.userId];;

				if (ship != null){
					try {
						ship.maxHp = parsedJson[Variables.selectMaxHp];
					} catch(exception){
						ship.maxHp = 0;
					};
					ship.maxShd = parsedJson[Variables.selectMaxShd]; 
					ship.hp = parsedJson[Variables.selectHp];
					ship.shd = parsedJson.shield
					
					window.attackWindow.id(ship.id);
					window.attackWindow.hp(ship.hp);
					window.attackWindow.shd(ship.shd);
					window.attackWindow.targetName(ship.name);
					
					a.lockedShip = ship;
					if (window.settings.autoAttack && a.autoLocked && $.now() - a.lastAutoLock < 900) {
						if (!a.attacking && !a.isShipOnBlacklist(ship.id) && a.lockedShip && ((window.settings.killNpcs && ship.isNpc && !window.settings.pause) || (window.settings.autoAttack && ship.isEnemy))) {
							a.startLaserAttack();
							a.lastAttack = $.now();
							a.attacking = true;
						}
					}
				}
			} catch (exception) {
				console.error(exception.message);
				console.log(parsedJson);  
			};
		}
	}

	get handler() {
		return this._handler;
	}
}