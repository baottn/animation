const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./cat_fighter_sprite.png")
ASSET_MANAGER.queueDownload("./cat_fighter_sprite2.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new CatFighter(gameEngine));
	gameEngine.addEntity(new CatFighter2(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
