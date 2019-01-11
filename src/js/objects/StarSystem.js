class StarSystem {
	constructor() {
		this.starSystem = [];
		this.fillStarSystem();
	}
	
	fillStarSystem(){
		let portals11 = [];
		let noPortals = [];
		portals11.push(new Portal(150000159,2));
		this.starSystem.push(new Map(1, "1-1", portals11));
		let portals12 = [];
		portals12.push(new Portal(150000160,1));
		portals12.push(new Portal(150000161,3));
		portals12.push(new Portal(150000163,4));
		this.starSystem.push(new Map(2, "1-2", portals12));
		let portals13 = [];
		portals13.push(new Portal(150000162,2));
		portals13.push(new Portal(150000185,4));
		portals13.push(new Portal(150000165,7));
		this.starSystem.push(new Map(3, "1-3", portals13));
		let portals14 = [];
		portals14.push(new Portal(150000164,2));
		portals14.push(new Portal(150000186,3));
		portals14.push(new Portal(150000189,13));
		portals14.push(new Portal(150000169,12));
		this.starSystem.push(new Map(4, "1-4", portals14));
		let portals21 = [];
		portals21.push(new Portal(150000174,6)); /* 2-1 | 2-2 */
		this.starSystem.push(new Map(5, "2-1", portals21));
		let portals22 = [];
		portals22.push(new Portal(150000168,7)); /* 2-2 | 2-3 */
		portals22.push(new Portal(150000175,8)); // 2-2 | 2-4
		portals22.push(new Portal(150000173,5)); // 2-2 | 2-4
		this.starSystem.push(new Map(6, "2-2", portals22));
		let portals23 = [];
		portals23.push(new Portal(150000166,3)); // 2-3 | 1-3
		portals23.push(new Portal(150000183,8)); // 2-3 | 2-4
		portals23.push(new Portal(150000167,6)); // 2-3 | 2-2
		this.starSystem.push(new Map(7, "2-3", portals23));
		let portals24 = [];
		portals24.push(new Portal(150000184,7)); // 2-4 | 2-3
		portals24.push(new Portal(150000191,14)); // 2-4 | 4-2
		portals24.push(new Portal(150000176,6)); // 2-4 | 2-2
		portals24.push(new Portal(150000177,11)); // 2-4 | 3-3
		this.starSystem.push(new Map(8, "2-4", portals24));
		let portals31 = [];
		portals31.push(new Portal(150000182,10)); // 3-1 | 3-2
		this.starSystem.push(new Map(9, "3-1", portals31));
		let portals32 = [];
		portals32.push(new Portal(150000180,11)); // 3-2 | 3-3
		portals32.push(new Portal(150000172,12)); // 3-2 | 3-4
		portals32.push(new Portal(150000181,9)); // 3-2 | 3-1
		this.starSystem.push(new Map(10, "3-2", portals32));
		let portals33 = [];
		portals33.push(new Portal(150000178,8)); // 3-3 | 2-4
		portals33.push(new Portal(150000188,12)); // 3-3 | 3-4
		portals33.push(new Portal(150000179,10)); // 3-3 | 3-2
		this.starSystem.push(new Map(11, "3-3", portals33));
		let portals34 = [];
		portals34.push(new Portal(150000170,4));
		portals34.push(new Portal(150000193,15));
		portals34.push(new Portal(150000187,11));
		portals34.push(new Portal(150000171,10));
		this.starSystem.push(new Map(12, "3-4", portals34));
		let portals43 = [];
		portals43.push(new Portal(150000194,12)); // 4-3 | 3-4
		portals43.push(new Portal(150000198,14)); // 4-3 | 4-2
		portals43.push(new Portal(150000199,13)); // 4-3 | 4-1
		portals43.push(new Portal(150000293,16)); // 4-3 | 4-4
		this.starSystem.push(new Map(15, "4-3", portals43));
		let portals41 = [];
		portals41.push(new Portal(150000190,4)); // 4-1 | 1-4
		portals41.push(new Portal(150000195,14)); // 4-1 | 4-2
		portals41.push(new Portal(150000200,15)); // 4-1 | 4-3
		portals41.push(new Portal(150000289,16)); // 4-1 | 4-4
		this.starSystem.push(new Map(13, "4-1", portals41));
		let portals42 = [];
		portals42.push(new Portal(150000192,8)); // 4-2 | 2-4
		portals42.push(new Portal(150000196,13)); // 4-2 | 4-1
		portals42.push(new Portal(150000197,15)); // 4-2 | 4-3
		portals42.push(new Portal(150000291,16)); // 4-2 | 4-4
		this.starSystem.push(new Map(14, "4-2", portals42));
		let portals44 = [];
		portals44.push(new Portal(150000318,25)); // 4-4 | 3-5
		portals44.push(new Portal(150000294,15)); // 4-4 | 4-3
		portals44.push(new Portal(150000292,14)); // 4-4 | 4-2
		portals44.push(new Portal(150000308,21)); // 4-4 | 2-5
		portals44.push(new Portal(150000298,17)); // 4-4 | 1-5
		portals44.push(new Portal(150000290,13)); // 4-4 | 4-1
		this.starSystem.push(new Map(16, "4-4", portals44));
		let portals45 = [];
		portals45.push(new Portal(150000329,17)); // 4-5 | 1-5
		portals45.push(new Portal(150000331,21)); // 4-5 | 2-5
		portals45.push(new Portal(150000333,25)); // 4-5 | 3-5
		portals45.push(new Portal(150000428,91)); // 4-5 | 5-1 MMO
		portals45.push(new Portal(150000430,91)); // 4-5 | 5-1 EIC
		portals45.push(new Portal(150000432,91)); // 4-5 | 5-1 VRU
		this.starSystem.push(new Map(29, "4-5", portals45));
		let portals15 = [];
		portals15.push(new Portal(150000299,16)); // 1-5 | 4-4
		portals15.push(new Portal(150000328,29)); // 1-5 | 4-5
		portals15.push(new Portal(150000300,18)); // 1-5 | 1-6
		portals15.push(new Portal(150000302,19)); // 1-5 | 1-7
		this.starSystem.push(new Map(17, "1-5", portals15));
		let portals16 = [];
		portals16.push(new Portal(150000301,17)); //1-6 | 1-5
		portals16.push(new Portal(150000304,20)); //1-6 | 1-8
		this.starSystem.push(new Map(18, "1-6", portals16));
		let portals17 = [];
		portals17.push(new Portal(150000306,20)); //1-7 | 1-8
		portals17.push(new Portal(150000303,17)); //1-7 | 1-5
		this.starSystem.push(new Map(19, "1-7", portals17));
		let portals18 = [];
		portals18.push(new Portal(150000305,18)); //1-8 | 1-6
		portals18.push(new Portal(150000307,19)); //1-8 | 1-7
		portals18.push(new Portal(150000201,306)); // 1-8 | 1-BL
		this.starSystem.push(new Map(20, "1-8", portals18));
		let portals1B = [];
		portals1B.push(new Portal(150000202,20)); // 1-BL | 1-8
		this.starSystem.push(new Map(306, "1-BL", portals1B));
		let portals25 = [];
		portals25.push(new Portal(150000309,16)); //2-5 | 4-4
		portals25.push(new Portal(150000330,29)); //2-5 | 4-5
		portals25.push(new Portal(150000310,22)); //2-5 | 2-6
		portals25.push(new Portal(150000312,23)); //2-5 | 2-7
		this.starSystem.push(new Map(21, "2-5", portals25));
		let portals26 = [];
		portals26.push(new Portal(150000311,21)); //2-6 | 2-5
		portals26.push(new Portal(150000314,24)); //2-6 | 2-8
		this.starSystem.push(new Map(22, "2-6", portals26));
		let portals27 = [];
		portals27.push(new Portal(150000313,21)); //2-7 | 2-5
		portals27.push(new Portal(150000316,24)); //2-7 | 2-8
		this.starSystem.push(new Map(23, "2-7", portals27));
		let portals28 = [];
		portals28.push(new Portal(150000315,22)); //2-8 | 2-6
		portals28.push(new Portal(150000317,23)); //2-8 | 2-7
		portals28.push(new Portal(150000205,307)); //2-8 | 2-Bl
		this.starSystem.push(new Map(24, "2-8", portals28));
		let portals2bl = [];
		portals2bl.push(new Portal(150000206,24)); //2-BL | 2-8
		portals2bl.push(new Portal(150000207,306)); //2-BL | 1-BL
		//portals2bl.push(new Portal(150000208,0)); //2-BL | 3-BL
		this.starSystem.push(new Map(307, "2-BL", portals2bl));
		let portals35 = [];
		portals35.push(new Portal(150000319,16)); //3-5 | 4-4
		portals35.push(new Portal(150000332,29)); //3-5 | 4-5
		portals35.push(new Portal(150000320,26)); //3-5 | 3-6
		portals35.push(new Portal(150000322,27)); //3-5 | 3-7
		this.starSystem.push(new Map(25, "3-5", portals35));
		let portals36 = [];
		portals36.push(new Portal(150000321,25)); //3-6 | 3-5
		portals36.push(new Portal(150000324,28)); //3-6 | 3-8
		this.starSystem.push(new Map(26, "3-6", portals36));
		let portals37 = [];
		portals37.push(new Portal(150000323,25)); //3-7 | 3-5
		portals37.push(new Portal(150000326,28)); //3-7 | 3-8
		this.starSystem.push(new Map(27, "3-7", portals37));
		let portals38 = [];
		portals38.push(new Portal(150000327,27)); //3-8 | 3-7
		portals38.push(new Portal(150000325,26)); //3-8 | 3-6
		this.starSystem.push(new Map(28, "3-8", portals38));
		let portals51 = [];
		portals51.push(new Portal(150000434,92)); // 5-1 | 5-2 MMO
		portals51.push(new Portal(150000438,92)); // 5-1 | 5-2 VRU
		portals51.push(new Portal(150000436,92)); // 5-1 | 5-2 EIC
		this.starSystem.push(new Map(91, "5-1", portals51));
		let portals52 = [];
		portals52.push(new Portal(150000442,93)); // 5-2 | 5-3 EIC
		portals52.push(new Portal(150000440,93)); // 5-2 | 5-3 MMO 15
		portals52.push(new Portal(150000444,93)); // 5-2 | 5-3 VRU
		this.starSystem.push(new Map(92, "5-2", portals52));
		let portals53 = [];
		portals53.push(new Portal(150000448,16)); // 5-3 | 4-4
		portals53.push(new Portal(150000446,16)); // 5-3 | 4-4
		portals53.push(new Portal(150000450,16)); // 5-3 | 4-4
		this.starSystem.push(new Map(93, "5-3", portals53));
		
		this.starSystem.push(new Map(51, "GG α", noPortals));
		this.starSystem.push(new Map(55, "GG δ", noPortals));
		this.starSystem.push(new Map(73, "GG ζ", noPortals));
		this.starSystem.push(new Map(74, "GG κ", noPortals));
		this.starSystem.push(new Map(200, "LOW", noPortals));
		this.starSystem.push(new Map(203, "GG Hades", noPortals));
		this.starSystem.push(new Map(300, "GG Kuiper 1", noPortals));
		this.starSystem.push(new Map(301, "GG Kuiper 2", noPortals));
		this.starSystem.push(new Map(302, "GG Kuiper 3", noPortals));
		this.starSystem.push(new Map(303, "GG Kuiper 4", noPortals));
		this.starSystem.push(new Map(304, "GG Kuiper 5", noPortals));
	}
	
	completeRute(imcompleteRute){
		let rute = [];
		for (let i = 0;i < imcompleteRute.length; i++) {
			let idWorkMap = imcompleteRute[i];
			let nextMap = imcompleteRute[i + 1];
			for (let e = 0;e < this.starSystem.length;e++) {
				if (this.starSystem[e].mapId == idWorkMap) {
					let map = this.starSystem[e];
					let portalschosen = this.returnANextPortal(map.portals,nextMap);
					let arrayPortals = [];
					arrayPortals.push(portalschosen);
					rute.push(new Map(map.mapId, map.mapName, arrayPortals));
				}
			}
		}
		return rute;
	}
	
	returnANextPortal(portals,idGoMap){
		for (let i = 0;i < portals.length; i++) {
			if (portals[i].idLinkedMap == idGoMap) {
				return portals[i];
			}
		}
	}
	
	getMapName(idMap){
		let mapName = idMap;
		for (let i = 0;i < this.starSystem.length; i++) {
			if(this.starSystem[i].mapId == idMap) {
				mapName = this.starSystem[i].mapName;
				return mapName;
			}
		}
		return mapName;
	}
}