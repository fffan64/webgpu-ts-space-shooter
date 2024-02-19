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

  const postProcessEffect1 = await engine.effectsFactory.createBloomEffect();
  const postProcessEffect2 = await engine.effectsFactory.createCrtEffect();

  engine.onUpdate = (dt: number) => {
    player.update(dt);
    background.update(dt);
    enemyManager.update(dt);
    bulletManager.update(dt);
    explosionManager.update(dt);
  };

  engine.onDraw = () => {
    engine.setDestinationTexture(postProcessEffect1.sceneTexture.texture);
    engine.setDestinationTexture2(postProcessEffect1.brightnessTexture.texture);

    background.draw(engine.spriteRenderer);
    player.draw(engine.spriteRenderer);
    enemyManager.draw(engine.spriteRenderer);
    bulletManager.draw(engine.spriteRenderer);
    explosionManager.draw(engine.spriteRenderer);
    hightScore.draw(engine.spriteRenderer);

    postProcessEffect1.draw(engine.getCanvasTexture().createView());

    engine.setDestinationTexture(postProcessEffect2.screenTexture.texture);
    postProcessEffect2.draw(engine.getCanvasTexture().createView());
  };

  engine.draw();
});
