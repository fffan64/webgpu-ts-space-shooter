import { SpriteRenderer } from "../sprite-renderer";
import { BullerManager } from "./bullet-manager";
import { Enemy } from "./enemy";
import { ExplosionManager } from "./explosion-manager";
import { HightScore } from "./high-score";
import { MeteorEnemy } from "./meteor-enemy";
import { Player } from "./player";

const SPAWN_INTERVAL = 1000;

export class EnemyManager {
  private timeToSpawn = 0;
  private pool: Enemy[] = [];

  constructor(
    private readonly player: Player,
    private readonly explosionManager: ExplosionManager,
    private readonly bulletManager: BullerManager,
    private gameWidth: number,
    private gameHeight: number,
    private readonly highScore: HightScore
  ) {}

  public spawnEnemy() {
    if (this.timeToSpawn > SPAWN_INTERVAL) {
      this.timeToSpawn = 0;
      let enemy = this.pool.find((e) => !e.active);

      if (!enemy) {
        enemy = new MeteorEnemy();
        this.pool.push(enemy);
      }

      enemy.active = true;
      enemy.drawRect.x =
        Math.random() * (this.gameWidth - enemy.drawRect.width);
      enemy.drawRect.y = -enemy.drawRect.height;
    }
  }

  public update(dt: number) {
    this.timeToSpawn += dt;
    this.spawnEnemy();

    for (const enemy of this.pool) {
      if (enemy.active) {
        enemy.update(dt);

        // enemy player collision
        if (enemy.collider.intersects(this.player.collider)) {
          enemy.active = false;
          this.explosionManager.create(enemy.drawRect);
        }

        // enemy bullet collision
        if (this.bulletManager.intersectsEnemy(enemy)) {
          enemy.active = false;
          this.explosionManager.create(enemy.drawRect);
          this.highScore.currentScore += 10;
        }

        if (enemy.drawRect.y > this.gameHeight) {
          enemy.active = false;
        }
      }
    }
  }

  public draw(spriteRenderer: SpriteRenderer) {
    for (const enmey of this.pool) {
      if (enmey.active) {
        enmey.draw(spriteRenderer);
      }
    }
  }
}
