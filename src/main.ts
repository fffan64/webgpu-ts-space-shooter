import { Engine } from "./engine";
import { Background } from "./game/background";
import { BullerManager } from "./game/bullet-manager";
import { EnemyManager } from "./game/enemy-manager";
import { ExplosionManager } from "./game/explosion-manager";
import { Player } from "./game/player";
import { HightScore } from "./game/high-score";

const engine = new Engine();
engine.initialize().then(async () => {
  const player = new Player(
    engine.inputManager,
    engine.gameBounds[0],
    engine.gameBounds[1]
  );

  const background = new Background(engine.gameBounds[0], engine.gameBounds[1]);
  const explosionManager = new ExplosionManager();
  const bulletManager = new BullerManager(player);
  const hightScore = new HightScore();
  const enemyManager = new EnemyManager(
    player,
    explosionManager,
    bulletManager,
    engine.gameBounds[0],
    engine.gameBounds[1],
    hightScore
  );

  const bloomEffect = await engine.effectsFactory.createBloomEffect();
  const crtEffect = await engine.effectsFactory.createCrtEffect();
  // const grayEffect = await engine.effectsFactory.createPostProcessEffect();

  engine.onUpdate = (dt: number) => {
    player.update(dt);
    background.update(dt);
    enemyManager.update(dt);
    bulletManager.update(dt);
    explosionManager.update(dt);
  };

  engine.onDraw = (dt: number) => {
    background.draw(engine.spriteRenderer);
    player.draw(engine.spriteRenderer);
    enemyManager.draw(engine.spriteRenderer);
    bulletManager.draw(engine.spriteRenderer);
    explosionManager.draw(engine.spriteRenderer);
    hightScore.draw(engine.spriteRenderer);

    // engine.setDestinationTexture(grayEffect.texture.texture);
    // grayEffect.draw(engine.getCanvasTexture().createView());
    crtEffect.timeValue = dt;
    engine.setDestinationTexture(crtEffect.screenTexture.texture);
    crtEffect.draw(engine.getCanvasTexture().createView());

    engine.setDestinationTexture(bloomEffect.sceneTexture.texture);
    engine.setDestinationTexture2(bloomEffect.brightnessTexture.texture);
    bloomEffect.draw(crtEffect.screenTexture.texture.createView());
  };

  engine.draw();
});
